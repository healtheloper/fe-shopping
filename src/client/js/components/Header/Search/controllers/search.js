import { delay } from "../../../../core/utils";

const delayVisible = async (ms, lists) => {
  for (const li of lists) {
    await delay(ms);
    li.style.visibility =
      li.style.visibility === "visible" ? "hidden" : "visible";
  }
};

async function handleBodyClick({ target }) {
  const $searchCategoryList = this.$target.querySelector(
    ".search__category-list"
  );
  const $target = target.closest(".search__category");
  const $searchCategory = this.$target.querySelector(".search__category");
  const TARGET_IS_SCATEGORY = $target === $searchCategory;
  const CATEGORY_LIST_ACTING =
    $searchCategoryList.classList.contains("list-act");
  const CLICK_OTHER_BODY = !TARGET_IS_SCATEGORY && CATEGORY_LIST_ACTING;

  if (CLICK_OTHER_BODY) {
    $searchCategoryList.classList.remove("list-act");
    const lists = [...$searchCategoryList.querySelectorAll("li")];
    lists.reverse();
    await delayVisible(4, lists);
  }
}

async function handleSearchCategoryClick() {
  const $searchCategoryList = this.$target.querySelector(
    ".search__category-list"
  );
  $searchCategoryList.classList.toggle("list-act");
  const lists = [...$searchCategoryList.querySelectorAll("li")];
  if (!$searchCategoryList.classList.contains("list-act")) {
    lists.reverse();
  }
  await delayVisible(4, lists);
}

export { handleBodyClick, handleSearchCategoryClick };