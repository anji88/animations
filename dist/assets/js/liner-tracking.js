(function tracking () {
    $("#rdobl").click(function() {
        $("#blno").attr("placeholder", "BL Number");
    });
    $("#rdocon").click(function() {
        $("#blno").attr("placeholder", "Container Number");
    });
    $(document).on('click', '#track-number', function (e) {
        var v1=document.getElementById('rdobl').checked;
        var v2=document.getElementById('rdocon').checked;
        var v3=document.getElementById('blno').value;
        if(v3=="") {
            alert("Kindly Enter Search Value");
            document.getElementById('blno').focus();
            return;
        }
        if (v1 == true) {
            document.location = "http://web8.transworld.com/avanatracking/bltracking.aspx?blno="+ v3;
        }
        else {
            document.location = "http://web8.transworld.com/avanatracking/containertracking.aspx?container="+ v3;
        }
    })
}());