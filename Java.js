function rot(s, i) {
    return s.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + i) ? c : c - 26);
    });
}
function update() {
$('#result').html(rot(document.getElementById('txt').value,+document.getElementById('rot').value)
)};