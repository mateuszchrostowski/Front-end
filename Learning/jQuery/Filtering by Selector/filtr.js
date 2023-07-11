//Filter Recruiters
$('select#sort-recruiters').change(function() {
	var filter = $(this).val();
	filterList(filter);
});

// Recruiters filter function
function filterList(value) {
	var list = $(".recruiter .recruiter-info");
	$(list).hide();
	if (value == "All") {
		$(".recruiter").find("article").each(function (i) {
			$(this).show();
		});
	} else {
		// *=" means that if a data-custom type contains multiple values, it will find them
		$(".recruiter").find("article[data-custom-type*=" + value + "]").each(function (i) {
			$(this).show();
		});
	}
}