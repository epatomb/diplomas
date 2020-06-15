$(function(){
    $("#form-total-primaria").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Anterior',
            next : 'Siguiente',
            finish : 'Generar diploma',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            var fullnamep = $('#nombresp').val();
            var fullcursop = $('#cursop').val();
            $('#fullnamep-val').text(fullnamep);
            $('#cursop-val').text(fullcursop);
            return true;
        }
    });
    $("#form-total-secundaria").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Anterior',
            next : 'Siguiente',
            finish : 'Generar diploma',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            var fullnames = $('#nombress').val();
            var fullcursos = $('#cursops').val();
            $('#fullnames-val').text(fullnames);
            $('#cursos-val').text(fullcursos);
            return true;
        }
    });
    $("#form-total-mascotas").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Anterior',
            next : 'Siguiente',
            finish : 'Generar diploma',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            var fullnamem = $('#nombresm').val();
            $('#fullnamem-val').text(fullnamem);
            return true;
        }
    });
});
