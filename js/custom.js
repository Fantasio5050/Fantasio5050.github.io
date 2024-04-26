document.addEventListener('DOMContentLoaded', function () {
    const btnSLAM = document.getElementById('btnSLAM');
    const btnSISR = document.getElementById('btnSISR');
    const collapseSLAM = document.getElementById('collapseSLAM');
    const collapseSISR = document.getElementById('collapseSISR');

    $('#divFeed').FeedEk({
        FeedUrl : 'https://fr.cointelegraph.com/rss',
        MaxCount : 5,
        ShowDesc : true,
        ShowPubDate:true,
        TitleLinkTarget:'_blank',
        DateFormat : 'dd/MM/yyyy',
        DateFormatLang : 'fr',
        Offset: 1,
        ShowAuthor: false,
        Success: function (feedItems) { },
        Error: function (error) { }
    });

    btnSLAM.addEventListener('click', function () {
        if (!collapseSLAM.classList.contains('show')) {
            btnSISR.classList.add('btn-hidden');
            setTimeout(function () {
                btnSISR.classList.add('btn-transition');
                btnSISR.style.transform = 'translateX(60%)';
            }, 50);

            setTimeout(function () {
                btnSLAM.classList.add('btn-transition');
                btnSLAM.style.transform = 'translateX(60%)';
                setTimeout(function () {
                    collapseSLAM.classList.add('show');
                }, 500);
            }, 500);
        } else {
            collapseSLAM.classList.remove('show');

            setTimeout(function () {
                btnSISR.classList.remove('btn-hidden');
                btnSISR.style.transform = '';
            }, 500);

            btnSLAM.style.transform = '';
        }
    });

    btnSISR.addEventListener('click', function () {
        if (!collapseSISR.classList.contains('show')) {
            btnSLAM.classList.add('btn-hidden');
            setTimeout(function () {
                btnSLAM.classList.add('btn-transition');
                btnSLAM.style.transform = 'translateX(-60%)';
            }, 50);

            setTimeout(function () {
                btnSISR.classList.add('btn-transition');
                btnSISR.style.transform = 'translateX(-60%)';
                setTimeout(function () {
                    collapseSISR.classList.add('show');
                }, 500);
            }, 500);
        } else {
            collapseSISR.classList.remove('show');

            setTimeout(function () {
                btnSLAM.classList.remove('btn-hidden');
                btnSLAM.style.transform = '';
            }, 500);

            btnSISR.style.transform = '';
        }
    });
});
