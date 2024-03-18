document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const text = document.getElementById("content");
  console.log(header, content);
  const getJoke = () => {
    fetch("https://api.blablagues.net/?rub=blagues")
      .then((res) => res.json())
      .then(({ data }) => {
        const { content } = data;
        console.log(content);

        header.textContent = content.text_head;
        text.textContent =
          content.text !== ""
            ? content.text
            : content.text_hidden;
      });
  };

  getJoke();
  document.body.addEventListener('click', getJoke);
});
