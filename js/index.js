$(function () {
	console.log('Hello Shopping List');
});

$('#addItem').click(function () {
	let text = $('#textBox').val();
	if (text == '') {
		alert('Enter some text');
	} else {
	createElement(text);
	}
	$('#textBox').val('');
});

$(document).on('click', '.check', function () {
	let li = $(this).closest('li');
	if (li.hasClass('checked')) {
		li.removeClass('checked');
		$(this).closest('.check').text('Check');
	} else {
		li.addClass('checked');
		$(this).closest('.check').text('Uncheck');
	}
});

$(document).on('click', '.delete', function () {
	$(this).closest('.box').remove();
});

function createElement(name) {
	$('#list').append(`
		<li class='box'>
			<p>${name}</p>
			<button class='check' type="button">Check</button>
			<button class='delete' type="button">Delete</button>
		</li>
	`);
}
