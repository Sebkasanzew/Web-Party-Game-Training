/* Task 6:
 * Change the HTML-content of the clicked element to
 * "<a target='_blank' href='http://www.google.de'>go to Google</a>"
 */
$().ready(function() { // execute the code in this block only when the DOM has finished loading
    $(".i-am-a-div-with-a-class").on("click", function(event) {
        console.log("the ID of the clicked element:", event.target.id);
        // You can get the current jQuery element with $(this)
        $(this).html("<a target='_blank' href='http://www.google.de'>go to Google</a>");
    })
});
