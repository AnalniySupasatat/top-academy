
document.addEventListener("DOMContentLoaded", () => {
  const tags = document.querySelectorAll(".tag");
  const blocks = document.querySelectorAll(".content-block");
  const menuButtons = document.querySelectorAll(".dropdown button");

  function activateGroup(group) {
    tags.forEach(t => t.classList.remove("active"));
    document.querySelectorAll(`.tag[data-group='${group}']`).forEach(t => t.classList.add("active"));

    blocks.forEach(block => {
      const groups = block.dataset.groups?.split(",") || [];
      if (groups.includes(group)) {
        block.style.display = "flex";
      } else {
        block.style.display = "none";
      }
    });
  }

  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      const group = tag.dataset.group;
      activateGroup(group);
    });
  });

  menuButtons.forEach(button => {
    const groupMatch = button.innerText.trim().match(/Группа (.+)/);
    if (groupMatch) {
      const group = groupMatch[1];
      button.addEventListener("click", () => {
        activateGroup(group);
      });
    }
  });
});

function resetFilter() {
  const tags = document.querySelectorAll(".tag");
  const blocks = document.querySelectorAll(".content-block");
  tags.forEach(t => t.classList.remove("active"));
  blocks.forEach(b => b.style.display = "flex");
}
