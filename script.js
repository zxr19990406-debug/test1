const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const productCards = document.querySelectorAll("[data-product]");
const planButtons = document.querySelectorAll("[data-select-plan]");
const planNote = document.querySelector("[data-plan-note]");
const newsletter = document.querySelector("[data-newsletter]");
const newsletterMessage = document.querySelector("[data-newsletter-message]");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-label", "打开导航");
  }
});

productCards.forEach((card) => {
  card.addEventListener("click", () => {
    productCards.forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");
  });
});

planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const planName = button.dataset.selectPlan;
    planNote.textContent = `已选择：${planName}。下单前可继续填写宠物年龄、体重和口味偏好。`;
  });
});

newsletter.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = new FormData(newsletter).get("email") || "你的邮箱";
  newsletterMessage.textContent = `已为 ${email} 记录试吃通知。`;
  newsletter.reset();
});
