    $(function(){
        $("#response").html("Response Values");

        $("#button").click( function(){
            var url = "https://discord.com/api/webhooks/1263255244088021012/PhlqNXm2GnT1lJYIqTHfOWQb0exmQRwHq2cozQ6Qs4az8qvx_bZW0DlLqwDDuQr5TdZr";

                var JSONdata = {
                    value1: $("#value1").val(),
                    value2: $("#value2").val()      
                };

            alert(JSON.stringify(JSONdata));

            $.ajax({
                type : 'post',
                url : url,
                data : JSON.stringify(JSONdata),
                contentType: 'application/JSON',
                dataType : 'JSON',
                scriptCharset: 'utf-8',
                success : function(data) {

                    // Success
                    alert("success");
                    alert(JSON.stringify(data));
                    $("#response").html(JSON.stringify(data));
                },
                error : function(data) {

                    // Error
                    alert("error");
                    alert(JSON.stringify(data));
                    $("#response").html(JSON.stringify(data));
                }
            });
        })
    })
