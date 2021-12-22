import { gun } from "./gun";
import { useSvgMouse } from "./mouse";
import { account } from "./account";
import { hashText } from "./hash";

export function useSpace(name = "public") {
  const space = reactive({
    title: name,
    db: gun.get(name),
    my: {
      id: null,
      mouse: computed(() => ({ x: mouse.normX, y: mouse.normY })),
      pos: null,
    },
    guests: {},
  });

  gun
    .user()
    .get("space")
    .get(name)
    .get("pos")
    .on((pos) => {
      space.my.pos = pos;
    });

  const { area, mouse } = useSvgMouse();

  async function join() {
    if (!gun.user().is) return;
    place();
    const hash = await hashText(account.pub);
    gun.get(name).get("#guests").get(hash).put(account.pub);
  }

  gun
    .get(name)
    .get("#guests")
    .map()
    .once((pub, hash) => {
      space.guests[hash] = {
        pub: pub,
        blink: false,
        pulse: 0,
        pos: {
          x: 0,
          y: 0,
        },
      };
      gun
        .user(pub)
        .get("pulse")
        .on((d) => {
          space.guests[hash].pulse = d;
          space.guests[hash].blink = !space.guests[hash].blink;
        })
        .back()
        .get("space")
        .get(name)
        .get("pos")
        .map()
        .on((d, k) => {
          space.guests[hash].pos[k] = d;
        });
    });

  function place() {
    let pos = { x: mouse.normX, y: mouse.normY };
    gun.user().get("space").get(name).get("pos").put(pos);
  }

  return { space, area, join, place };
}
