/*!
 * Name : Code Station Community
 * Details : No right Click for csc
 * Owner : Romeo89
 * Website : https://www.cscplus.work
 */
function n(n){if((document.layers||document.getElementById&&!document.all)&&(2==n.which||3==n.which))return!1}document.layers?(document.captureEvents(Event.MOUSEDOWN),document.onmousedown=n):(document.onmouseup=n,document.oncontextmenu=function n(){if(document.all)return!1}),document.oncontextmenu=Function("return false")
