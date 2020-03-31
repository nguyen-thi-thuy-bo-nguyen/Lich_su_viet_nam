var d = new Date();

function getDateReal() {
    var s = new String();
    var a = new String();
    a = d.getDay();
    switch (a) {
        case 1:
            {
                a = "Thứ hai";
                break;
            }
        case 2:
            {
                a = "Thứ ba";
                break;
            }
        case 3:
            {
                a = "Thứ tư";
                break;
            }
        case 4:
            {
                a = "Thứ năm";
                break;
            }
        case 5:
            {
                a = "Thứ sáu";
                break;
            }
        case 6:
            {
                a = "Thứ bảy";
                break;
            }
        case 7:
            {
                a = "Chủ nhật";
                break;
            }
        default:
            {
                a = "Không lấy được thứ!"
            }
    }
    s = a + " , " + d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    return s;



}
document.write(getDateReal());

