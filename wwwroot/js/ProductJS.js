$(document).ready(function () {
   
    GetProducts();
});

/*Read Data*/
function GetProducts()  {
  
    $.ajax({
        url:'/product/GetProducts',
        type:'get',
        datatype:'json',
        contentType: 'application/json;charset=utf-8',
        success: function (response) {
            if (response == null || response == undefined || response.length == 0) {
                var object = '';
                object += '<tr>';
                object += 'td colspan="5">' + 'Products not available' + '</td>';
                object += '</tr>';
                $('#tblBody').html(object);
            }
            else {
                var object = '';
                $.each(response, function (index, item) {
                    object += '<tr>';
                    object += '<td>' + item.id + '</td>';
                    object += '<td>' + item.productName + '</td>';
                    object += '<td>' + item.price + '</td>';
                    object += '<td>' + item.qty + '</td>';
                    object += '<td> <a href="#" class="btn btn-primary btn-sm" onclick="Edit(' + item.id + ')">Edit</a> <a href="#" class="btn btn-danger btn-sm" onclick="Delete(' + item.id + ')">Delete</a></td>'
                });
                $('#tblBody').html(object);
            }
        },
        error: function () {
            alert( )
        }
    });

}

$('#btnAdd').click(function () {
    $('#ProductModal').modal('show');
    $('#modalTitle').text('Add Product');

});

/*Insert Data*/
function Insert() {
    var result = Validate();
    if (result == false) {
        return false;
    }





    var formData = new Object();
    formData.id = $('#Id').val();
    formData.productName = $('#ProductName').val(); 
    formData.price = $('#Price').val();
    formData.qty = $('#Qty').val();

    $.ajax({
        url: '/product/Insert',
        data: formData,
        type: 'post',
        success: function (response) {
            if (response == null || response == undefined || response.length == 0) {
                alert('Unable to save the data.');
            }
            else {
                HideModal();
                GetProducts();
                alert(response);
            }

        },
        error: function () {
            alert('Unable to save the data.');

        }


    });

}


function HideModal() {
    ClearData();
    $('#ProductModal').modal('hide');

}

function ClearData() {
    $('#ProductName').val('');
    $('#Price').val('');
    $('#Qty').val('');

    $('#ProductName').css('border-color', 'Lightgrey');
    $('#Price').css('border-color', 'Lightgrey');
    $('#Qty').css('border-color', 'Lightgrey');
}


function Validate() {
    var isValid = true;

    if ($('#ProductName').val().trim() == "") {
        $('#ProductName').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#ProductName').css('border-color', 'Lightgrey');
    }

    if ($('#Price').val().trim() == "") {
        $('#Price').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Price').css('border-color', 'Lightgrey');
    }

    if ($('#Qty').val().trim() == "") {
        $('#Qty').css('border-color', 'Red');
        isValid = false;
    }
    else {
        $('#Qty').css('border-color', 'Lightgrey');
    }
    return isValid;

}


$('#ProductName').change(function () {
    Validate();
})

$('#Price').change(function () {
    Validate();
})


$('#Qty').change(function () {
    Validate();
})