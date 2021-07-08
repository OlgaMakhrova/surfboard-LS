 const findBlockByAlias = (alias) => {
  return $(".coments__item").filter((ndx, item) => {
    return $(item).attr("data-linked-with") === alias;
   });
 };
 

$(".coments__swither-link").click((e) =>{
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target =$this.attr("data-open");
  const itemToShow = findBlockByAlias(target);
  const curItem = $this.closest(".coments__swither-item");

  itemToShow.addClass("active").siblings().removeClass("active");
  curItem.addClass("active").siblings().removeClass("active");

});