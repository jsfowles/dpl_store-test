//when user clicks on product go to product page /products/:id
//when user deletes product delete product on server /products/:id
//when user edits product go to edit product form /products/:id

$(document).ready( function() {
  var baseUrl = 'http://devpoint-ajax-example-server.herokuapp.com/api/v1/products';

  //index path
  if (location.pathname === '/') {
    function getProducts() {
      $.ajax({
        url: baseUrl,
        type: 'GET',
        dataType: 'JSON'
      }).done( function(data) {
        var tbody = $('#products');
        tbody.children().remove();
        data.products.forEach( function(product) {
          var price = product.base_price ? product.base_price : '0';
          var desc = product.description ? product.description : '';
          var row = '<tr><td>' + product.name + '</td>';
              row += '<td>$' + price + '</td>';
              row += '<td>' + desc + '</td>';
              row += '<td>'
              row += '<button data-id="' + product.id + '" class="btn btn-danger delete">Delete</button>'
              row += '</td>';
              row += '</tr>';
              tbody.append(row);
        });
      }).fail( function(err) {
        alert('Something went wrong call support');
      });
    }

    getProducts();

    $(document).on('click', '.delete', function() {
      var id = $(this).data().id;
      deleteProduct(id);
    });

    function deleteProduct(id) {
      $.ajax({
        url: baseUrl + '/' + id,
        type: 'DELETE'
      }).done( function() {
        getProducts();
      }).fail( function(err) {
      })
    }
  }
})
