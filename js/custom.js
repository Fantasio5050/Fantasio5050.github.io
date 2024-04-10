document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('collapseSLAM').addEventListener('show.bs.collapse', function() {
        document.getElementById('btnSISR').classList.remove('fade-in');
        document.getElementById('btnSISR').classList.add('fade-out');
    });

    document.getElementById('collapseSISR').addEventListener('show.bs.collapse', function() {
        document.getElementById('btnSLAM').classList.remove('fade-in');
        document.getElementById('btnSLAM').classList.add('fade-out');
    });

    document.getElementById('collapseSLAM').addEventListener('hide.bs.collapse', function() {
        document.getElementById('btnSISR').classList.remove('fade-out');
        document.getElementById('btnSISR').classList.add('fade-in');
    });

    document.getElementById('collapseSISR').addEventListener('hide.bs.collapse', function() {
        document.getElementById('btnSLAM').classList.remove('fade-out');
        document.getElementById('btnSLAM').classList.add('fade-in');
    });
});
