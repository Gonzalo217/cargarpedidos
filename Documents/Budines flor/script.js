document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombreCliente = document.getElementById('nombreCliente').value;
    const direccionCliente = document.getElementById('direccionCliente').value;
    const horaEntrega = document.getElementById('horaEntrega').value;
    const producto = document.getElementById('producto').value;

    const listaPedidos = document.getElementById('listaPedidos');
    const pedidoItem = document.createElement('li');

    const pedidoInfo = document.createElement('div');
    pedidoInfo.classList.add('pedido-info');

    const productoImg = document.createElement('img');
    if (producto === 'budin') {
        productoImg.src = 'budin.jpg';
    } else if (producto === 'frutosSecos1') {
        productoImg.src = 'frutosSecos1.jpg';
    } else if (producto === 'frutosSecos2') {
        productoImg.src = 'frutosSecos2.jpg';
    } else {
        productoImg.src = 'frutosSecos3.jpg';
    }

    const pedidoText = document.createElement('span');
    pedidoText.textContent = `Cliente: ${nombreCliente}, Dirección: ${direccionCliente}, Hora: ${horaEntrega}, Producto: ${producto}`;

    const botonEntregado = document.createElement('button');
    botonEntregado.textContent = 'Marcar como Entregado';
    botonEntregado.addEventListener('click', function() {
        pedidoItem.classList.toggle('entregado');
    });

    pedidoInfo.appendChild(productoImg);
    pedidoInfo.appendChild(pedidoText);

    pedidoItem.appendChild(pedidoInfo);
    pedidoItem.appendChild(botonEntregado);
    listaPedidos.appendChild(pedidoItem);

    document.getElementById('pedidoForm').reset();
});
