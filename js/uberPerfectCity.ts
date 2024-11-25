export function uberPerfectCity(dep: number[], dest: number[]) {
  const [dep_x, dep_y] = dep;
  const [dest_x, dest_y] = dest;

  let min_x = Math.abs(dep_x - dest_x);
  let min_y = Math.abs(dep_y - dest_y);

  if (Math.ceil(dep_x) === Math.ceil(dest_x)) {
    const paths_x = [
      Math.ceil(dep_x) - dep_x + (Math.ceil(dest_x) - dest_x),
      dep_x - Math.floor(dep_x) + dest_x - Math.floor(dest_x),
    ];

    min_x = Math.min(...paths_x);
  }

  // if (Math.ceil(dep_y) === Math.ceil(dest_y)) {
  const paths_y = [
    Math.ceil(dep_y) - dep_y + (Math.ceil(dest_y) - dest_y),
    dep_y - Math.floor(dep_y) + dest_y - Math.floor(dest_y),
  ];

  // min_x = Math.min(...paths_y);
  // }
  //
  return min_x + min_y;
}
