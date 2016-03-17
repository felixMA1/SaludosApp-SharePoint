'use strict';

var context = SP.ClientContext.get_current();

var user = context.get_web().get_currentUser();

$(document).ready(function () {

getUserName();

});

function getUserName() {

    context.load(user);

    context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);

}

function onGetUserNameSuccess() {

    $('#saludos').text('Bienvenido ' + user.get_title());

}

function onGetUserNameFail(sender, args) {

    alert('Error al recuperar el texto. Error:' + args.get_message());

}

