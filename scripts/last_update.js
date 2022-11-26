async function set_last_update_date() {
  const el = document.getElementById('last-update');
  if (el === undefined) return;

  const last_commit = await fetch('https://api.github.com/repos/tguichaoua/tguichaoua.github.io/commits/main').then(
    (res) => res.json(),
  );
  const date = new Date(last_commit.commit.author.date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  el.innerHTML = date.toLocaleDateString(undefined, options);
}

window.addEventListener('load', set_last_update_date);
