const getAllPosts = async () => {
  const response = await fetch('http://localhost:3000/getAllPosts');
  const data = await response.json();

  return data;
};

const renderPosts = async () => {
  const grid = document.querySelector('.grid');
  const posts = await getAllPosts();

  posts.reverse().forEach((postData) => {
    const post = `
        <article class="kartaOgloszenie">
            ${postData.image.includes("http") ? `<img src=${postData.img} >` : `<img src="placeholder.png">`}
            <h3 class="oglTytul">${postData.title}</h3>
            <h4 class="oglCena">${postData.price} zł</h4>
        </article>`;
    grid.insertAdjacentHTML('afterbegin', post);
  });
};

renderPosts();
