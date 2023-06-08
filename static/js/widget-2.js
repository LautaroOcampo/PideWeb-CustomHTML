var PerfitOptIn = PerfitOptIn || {};

PerfitOptIn['Th3R6bsV'] = (function () {
    /*
    Form Data
    ******************************************************************************/
    var id = 'Th3R6bsV',
        action = 'https://pubapi.myperfit.com/v2/optin/pideweb/',
        form = {"title":"SUSCRIBITE AL NEWSLETTER","text":"¡Suscribite para recibir descuentos exclusivos!","buttonText":"Suscribirme","footer":"Recibirás un correo para validar tu email.","redirect":"","successMessage":"¡Muchas gracias! Recuerda revisar tu casilla para confirmar la suscripción.","interestsText":"","config":"{\"styles\":{\"headerBackgroundColor\":\"#C9EEFA\",\"backgroundColor\":\"#FFFFFF\",\"buttonBackgroundColor\":\"#ac0606\",\"headerTextColor\":\"#002275\",\"buttonTextColor\":\"#F5F5F5\",\"textColor\":\"#7E7E7E\",\"textAlign\":\"center\",\"titleInBody\":true,\"maxWidth\":\"1120px\"},\"layout\":\"default\",\"fonts\":{\"text\":{},\"title\":{}}}","fields":[{"id":3,"displayName":"Email","format":"EMAIL","required":true},{"id":1,"displayName":"Nombre","format":"TEXT","required":false},{"id":10,"displayName":"Cumpleaños (DD/MM)","format":"TEXT","required":false}],"interests":[]};
    /*

    Form Logic

    ******************************************************************************/

    var jqueryURL = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js',
        i18n = {
            es: {
                male: 'Masculino',
                female: 'Femenino',
                gender: 'GÃ©nero',
                language: 'Idioma',
                submitError: 'OcurriÃ³ un error, por favor intenta nuevamente.',
            },
            pt: {
                male: 'Masculino',
                female: 'Feminino',
                gender: 'GÃ©nero',
                language: 'LÃ­ngua',
                submitError: 'Ocorreu um erro. Por favor, tente novamente.',
            },
            en: {
                male: 'Male',
                female: 'Female',
                gender: 'Gender',
                language: 'Language',
                submitError: 'An error occurred, please try again.',
            },
        },
        i18nRules = {
            es: {
                EMAIL: {
                    regex: /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/,
                    message: 'Ingresa una direcciÃ³n de email vÃ¡lida.',
                },
                URL: {
                    regex: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                    message: 'Ingresa una URL vÃ¡lida.',
                },
                DATE: {
                    regex: /^(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d$/,
                    message: 'Ingresa una fecha con formato DD-MM-AAAA.',
                },
                INT: {
                    regex: /^[\d\,\.]+$/,
                    message: 'Ingresa un nÃºmero entero.',
                },
                TEXT: {
                    regex: /^.+$/,
                    message: 'Ingresa un texto vÃ¡lido.',
                },
                REQUIRED: {
                    regex: /^$|\s+/,
                    message: 'Completa este campo para continuar.',
                },
            },
            pt: {
                EMAIL: {
                    regex: /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/,
                    message: 'Insira um email vÃ¡lido.',
                },
                URL: {
                    regex: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                    message: 'Ingrese una URL vÃ¡lida.',
                },
                DATE: {
                    regex: /^(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d$/,
                    message: 'Insira uma data com formato DD-MM-AAAA.',
                },
                INT: {
                    regex: /^[\d\,\.]+$/,
                    message: 'Insira um nÃºmero inteiro.',
                },
                TEXT: {
                    regex: /^.+$/,
                    message: 'Insira um texto vÃ¡lido.',
                },
                REQUIRED: {
                    regex: /^$|\s+/,
                    message: 'Complete este campo para continuar.',
                },
            },
            en: {
                EMAIL: {
                    regex: /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/,
                    message: 'Insert a valid email address.',
                },
                URL: {
                    regex: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                    message: 'Insert a valid URL.',
                },
                DATE: {
                    regex: /^(0[1-9]|[12][0-9]|3[01])[-.](0[1-9]|1[012])[-.](19|20)\d\d$/,
                    message: 'Insert a date with format DD-MM-YYYY.',
                },
                INT: {
                    regex: /^[\d\,\.]+$/,
                    message: 'Insert a valid integer.',
                },
                TEXT: {
                    regex: /^.+$/,
                    message: 'Insert a valid text.',
                },
                REQUIRED: {
                    regex: /^$|\s+/,
                    message: 'Complete this field to continue.',
                },
            },
        },
        rules = i18nRules.es,
        defaultLayout = {
            partials: {
                layout: '<form id="optin-form-{{id}}" class="p-optin p-layout-{{layout}}" action="{{action}}" method="POST" accept-charset="UTF-8" data-ajax="{{ajax}}">{{header}}<div class="p-body">{{titleBlock}}{{textBlock}}{{_redirect}}{{_fields}}<div class="p-interests"><p class="p-interests-text">{{interestsText}}</p>{{_interests}}</div><button class="p-submit" type="submit">{{buttonText}}</button>{{footerBlock}}</div></form>',
                titleBlock: '<p class="p-title">{{title}}</p>',
                textBlock: '<p class="p-text">{{text}}</p>',
                footerBlock: '<p class="p-footer">{{footer}}</p>',
                header: '<div class="p-header"><div class="p-title">{{title}}</div><div class="p-close" id="p-close">&times;</div></div>',
                redirect: '<input type="hidden" name="redirect" value="{{redirect}}">',
                field: '<div class="p-field"><label><span>{{displayName}}</span></label><input type="text" maxlength="100" name="fields[{{id}}]" placeholder="{{placeholder}}" {{required}} data-validate={{format}} {{regex}} {{message}}></div>',
                fieldSelect:
                    '<div class="p-field"><label><span>{{displayName}}</span></label><select name="fields[{{id}}]" {{required}}><option value="" disabled selected>{{placeholder}}</option>{{fieldOptions}}</select></div>',
                fieldOption: '<option value="{{option}}">{{option}}</option>',
                selects: {
                    gender: '<div class="p-field"><label><span>{{displayName}}</span></label><select name="fields[{{id}}]" {{required}} class="p-select"><option value="" disabled selected>{{gender}}</option><option value="M">{{male}}</option><option value="F">{{female}}</option></select></div>',
                    language:
                        '<div class="p-field"><label><span>{{displayName}}</span></label><select name="fields[{{id}}]" {{required}} class="p-select"><option value="" disabled selected>{{language}}</option><option value="es">Espa&ntilde;ol</option><option value="en">English</option><option value="de">Deutsch</option><option value="fr">FranÃ§ais</option><option value="it">Italiano</option><option value="pt">PortuguÃªs</option></select></div>',
                    format: '<div class="p-field"><label><span>{{displayName}}</span></label><div><label><input type="radio" checked="checked" value="HTML" name="fields[{{id}}]"> HTML</label></div><div><label><input type="radio" value="TXT" name="fields[{{id}}]"> TXT</label></div></div>',
                },
                interests:
                    '<div class="p-interest"><label><input type="checkbox" name="interests[]" value="{{id}}" {{checked}}>{{displayName}}</label></div>',
                //test intereses con select
                // layout: '<form id="optin-form-{{id}}" class="p-optin" action="{{action}}" method="POST" accept-charset="UTF-8" data-ajax="{{ajax}}">{{header}}<div class="p-body"><p>{{text}}</p>{{_redirect}}{{_fields}}<div class="p-interests"><p class="p-interests-text">{{interestsText}}</p><select name="interest[]">{{_interests}}</select></div><p>{{footer}}</p><button class="p-submit" type="submit">{{buttonText}}</button></div></form>',
                // interests:
                //     '<option value="{{id}}">{{displayName}}</option>',
                success: '<div class="p-success">{{message}}</div>',
                button: '<button id="p-open" class="p-open">{{buttonText}}</button>',
                error: '<p class="p-error-message">{{error}}</p>',
                spinner:
                    '<svg class="p-spinner" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg>',
            },
            styles: {
                headerBackgroundColor: {
                    selector: '.p-optin{{id}} div.p-header',
                    property: 'background-color',
                },
                headerTextColor: {
                    selector: '.p-optin{{id}} div.p-header, div.p-close, .p-optin{{id}} div.p-body p.p-title',
                    property: 'color',
                },
                buttonBackgroundColor: {
                    selector: '.p-optin{{id}} .p-body button, div.p-button button.p-open',
                    property: 'background-color',
                },
                buttonTextColor: {
                    selector: '.p-optin{{id}} .p-body button, div.p-button button.p-open',
                    property: 'color',
                },
                textColor: {
                    selector:
                        '.p-optin{{id}} div.p-body p:not(.p-error-message):not(.p-title), .p-optin{{id}} div.p-body .p-success, .p-optin{{id}} div.p-body label',
                    property: 'color',
                },
                backgroundColor: {
                    selector: '.p-optin{{id}} div.p-body',
                    property: 'background-color',
                },
                image: {
                    selector: '.p-optin{{id}} div.p-col-image',
                    property: 'background-image',
                },
                imageSize: {
                    selector: '.p-optin{{id}} div.p-col-image',
                    property: 'background-size',
                },
                landingBackground: {
                    selector: 'body.p-landing',
                    property: 'background',
                },
                backgroundImage: {
                    selector: '.p-optin{{id}} div.p-body',
                    property: 'background-image',
                },
                backgroundImageSize: {
                    selector: '.p-optin{{id}} div.p-body',
                    property: 'background-size',
                },
                textAlign: {
                    selector: '.p-optin{{id}} .p-body p',
                    property: 'text-align',
                },
                maxWidth: {
                    selector: 'form.p-optin{{id}}',
                    property: 'max-width',
                },
            },
        };
    var layouts = {
            default: defaultLayout,
            leftImage: {
                partials: Object.assign({}, defaultLayout.partials, {
                    layout: '<form id="optin-form-{{id}}" class="p-optin p-layout-{{layout}}" action="{{action}}" method="POST" accept-charset="UTF-8" data-ajax="{{ajax}}">{{header}}<div class="p-body"><div class="p-grid"><div class="p-col p-col-image"></div><div class="p-col p-col-form">{{titleBlock}}{{textBlock}}{{_redirect}}{{_fields}}<div class="p-interests"><p class="p-interests-text">{{interestsText}}</p>{{_interests}}</div><button class="p-submit" type="submit">{{buttonText}}</button>{{footerBlock}}</div></div></form>',
                }),
                styles: defaultLayout.styles,
            },
            rightImage: {
                partials: Object.assign({}, defaultLayout.partials, {
                    layout: '<form id="optin-form-{{id}}" class="p-optin p-layout-{{layout}}" action="{{action}}" method="POST" accept-charset="UTF-8" data-ajax="{{ajax}}">{{header}}<div class="p-body"><div class="p-grid"><div class="p-col p-col-form">{{titleBlock}}{{textBlock}}{{_redirect}}{{_fields}}<div class="p-interests"><p class="p-interests-text">{{interestsText}}</p>{{_interests}}</div><button class="p-submit" type="submit">{{buttonText}}</button>{{footerBlock}}</div><div class="p-col p-col-image"></div></div></form>',
                }),
                styles: defaultLayout.styles,
            },
            inline: {
                partials: Object.assign({}, defaultLayout.partials, {
                    layout: '<form id="optin-form-{{id}}" class="p-optin p-layout-{{layout}}" action="{{action}}" method="POST" accept-charset="UTF-8" data-ajax="{{ajax}}">{{header}}<div class="p-body">{{titleBlock}}{{textBlock}}<div class="p-inline-fields">{{_redirect}}{{_fields}}<button class="p-submit" type="submit">{{buttonText}}</button></div>{{footerBlock}}</div></form>',
                }),
                styles: defaultLayout.styles,
            },
            topImage: {
                partials: Object.assign({}, defaultLayout.partials, {
                    layout: '<form id="optin-form-{{id}}" class="p-optin p-layout-{{layout}}" action="{{action}}" method="POST" accept-charset="UTF-8" data-ajax="{{ajax}}">{{header}}<div class="p-body"><div class="p-grid"><div class="p-col p-col-image"></div><div class="p-col p-col-form">{{titleBlock}}{{textBlock}}{{_redirect}}{{_fields}}<div class="p-interests"><p class="p-interests-text">{{interestsText}}</p>{{_interests}}</div><button class="p-submit" type="submit">{{buttonText}}</button>{{footerBlock}}</div></div></form>',
                }),
                styles: defaultLayout.styles,
            },
        },
        layout = layouts.default,
        partials = layout.partials,
        selects = {
            4: 'gender',
            5: 'language',
            7: 'format',
        },
        data = {
            _redirect: '',
            _fields: '',
            _interests: '',
        },
        el = {},
        t = function (string, values) {
            var value, regex;
            for (value in values) {
                if (values.hasOwnProperty(value)) {
                    regex = new RegExp('{{' + value + '}}', 'g');
                    string = string.replace(regex, values[value]);
                }
            }
            return string;
        },
        validateFields = function (e) {
            var i = 0,
                fields = e.target.elements,
                field,
                validate,
                required,
                pattern,
                errorMessages = document.getElementsByClassName('p-error-message');
            isValid = true;
            //clean prev errors
            while (errorMessages.length > 0) {
                errorMessages[0].parentNode.removeChild(errorMessages[0]);
            }

            // validate each field
            for (i = 0, field = ''; (field = fields[i++]); ) {
                if (field.localName !== 'input' && field.localName !== 'select') continue;

                if( field.getAttribute('data-validate') === 'EMAIL'){
                    field.value = field.value.trim();
                }

                field.className = '';
                validate = field.getAttribute('data-validate') || false;
                required = field.getAttribute('data-required') || false;

                customRegex = field.getAttribute('data-regex') || false;
                customMessage = field.getAttribute('data-message') || false;

                if (required && field.value === '') {
                    isValid = false;
                    field.className = 'p-error';
                    field.insertAdjacentHTML(
                        'afterend',
                        t(partials.error, {
                            error: rules.REQUIRED.message,
                        })
                    );
                } else if (validate && !customRegex && field.value !== '') {
                    pattern = new RegExp(rules[validate].regex);
                    if (!pattern.test(field.value)) {
                        isValid = false;
                        field.className = 'p-error';
                        field.insertAdjacentHTML(
                            'afterend',
                            t(partials.error, {
                                error: rules[validate].message,
                            })
                        );
                    }
                } else if (customRegex && field.value !== '') {
                    pattern = new RegExp(customRegex);
                    if (!pattern.test(field.value)) {
                        isValid = false;
                        field.className = 'p-error';
                        field.insertAdjacentHTML(
                            'afterend',
                            t(partials.error, {
                                error: customMessage,
                            })
                        );
                    }
                }
            }
            if (!isValid) {
                e.preventDefault();
            }
            return isValid;
        },
        closePopUp = function (e) {
            el.body.className = bodyClasses;
            el.popup.className = 'p-layer p-closed';

            if(callbacks.closed && callbacks.closed instanceof Function) {
                callbacks.closed();
            }            
        },
        openPopUp = function (e) {
            el.body.className = bodyClasses + ' p-popup-open';
            el.popup.className = 'p-layer';
            setTimeout(()=>{
                el.popup.className = 'p-layer p-opened';
            }, 1);

            if(callbacks.opened && callbacks.opened instanceof Function) {
                callbacks.opened();
            }
        },
        saveCookie = function () {
            var expires = new Date(),
                days = 365,
                domain = location.host;
            if (domain.startsWith('www')) {
                domain = domain.replace('www', '');
            } else if (domain) {
                domain = '.' + domain;
            }
            expires.setMilliseconds(expires.getMilliseconds() + days * 864e5);
            document.cookie = 'p-optin=1; path=/ ; expires=' + expires.toUTCString() + ' ; domain=' + domain;
        },
        readCookie = function () {
            var result,
                key = 'p-optin';
            return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie))
                ? result[1]
                : null;
        },
        i,
        j,
        current,
        template,
        script,
        bindSubmit,
        bodyClasses,
        html = '',
        isValid = true,
        lang = 'es',
        config = {},
        callbacks = {opened: undefined, closed: undefined, submitted: undefined},
        setCallbacks = function ({opened, closed, submitted}) {
            if(opened && opened instanceof Function){
                callbacks.opened = opened;
            }
            if(closed && closed instanceof Function){
                callbacks.closed = closed;
            }
            if(submitted && submitted instanceof Function){
                callbacks.submitted = submitted;
            }                        
        };

    try {
        if (form.config) {
            config = JSON.parse(form.config);
        }
    } catch (error) {
        console.error('Invalid custom config');
    }

    if (config.layout) {
        layout = layouts[config.layout];
        if (!layout) layout = layouts['default'];
    }
    partials = layout.partials;

    // jQuery and AJAX configuration
    form.ajax = form.redirect.length ? false : true;

    // Set the action
    form.action = action + id;

    // Set the ID
    form.id = id;

    //Browser lang
    var navLocale = navigator.language || navigator.userLanguage;
    if (navLocale) {
        var navLang = navLocale.substr(0, 2);
        if (i18nRules[navLang]) {
            lang = navLang;
        }
    }

    rules = i18nRules[lang];

    var titleInBody = config.styles && config.styles.titleInBody;

    // Set the header
    form.header = form.title !== '' && !titleInBody ? t(partials.header, form) : '';

    form.titleBlock = form.title !== '' && titleInBody ? t(partials.titleBlock, form) : '';

    // Set the header
    form.textBlock = form.text === '' ? '' : t(partials.textBlock, form);

    // Set the header
    form.footerBlock = form.footer === '' ? '' : t(partials.footerBlock, form);

    form.layout = config.layout || 'default';

    // Render the form
    html = html + t(partials.layout, form);

    // Render redirect
    data._redirect = t(partials.redirect, form);

    var customFieldsConfig = config.fields || {};

    // Render fields
    for (i = 0; i < form.fields.length; i++) {
        current = form.fields[i];
        current.required = current.required ? 'data-required="true"' : '';
        current.placeholder = current.format === 'DATE' ? 'DD-MM-AAAA' : current.displayName;

        var idStr = form.fields[i].id.toString();
        if (customFieldsConfig[idStr] && customFieldsConfig[idStr].validator) {
            var customValidator = customFieldsConfig[idStr].validator;
            if (customValidator.regex) {
                current.regex = 'data-regex="' + customValidator.regex + '"';
            }
            if (customValidator.message) {
                current.message = 'data-message="' + customValidator.message + '"';
            }
        } else {
            current.regex = '';
            current.message = '';
        }

        if (selects[current.id] !== undefined) {
            current.male = i18n[lang].male;
            current.female = i18n[lang].female;
            current.gender = i18n[lang].gender;
            current.language = i18n[lang].language;
            template = partials.selects[selects[current.id]];
        } else {
            if (customFieldsConfig[idStr] && customFieldsConfig[idStr].options) {
                current.fieldOptions = '';
                for (j = 0; j < customFieldsConfig[idStr].options.length; j++) {
                    current.fieldOptions += t(partials.fieldOption, { option: customFieldsConfig[idStr].options[j] });
                }

                template = partials.fieldSelect;
            } else {
                template = partials.field;
            }
        }
        data._fields += t(template, current);
    }

    // Render interests
    for (i = 0; i < form.interests.length; i++) {
        current = form.interests[i];
        current.checked = current.selected ? 'checked' : '';
        current.displayName = current.displayName.replace(
            /\[([^\]]+)\]\(([^\)]+)\)/,
            '<a target="_blank" href="$2">$1</a>'
        );
        data._interests += t(partials.interests, current);
    }

    // Add fields to the form
    html = t(html, data);

    // Select the container
    el.container = document.getElementById('optin-' + id);

    // Select the body
    el.body = document.getElementsByTagName('body')[0];
    bodyClasses = el.body.className;

    // Add class acording to type
    form.type = el.container.getAttribute('data-type') || 'inline';
    el.container.className = 'p-' + form.type;

    // Inline form
    if (form.type === 'inline') {
        el.container.innerHTML = html;
        el.form = el.container.childNodes[0];
    }

    // Pop-Up form
    if (form.type === 'popup' || form.type === 'button') {
        if (form.type === 'popup') {
            form.mode = el.container.getAttribute('data-mode') || 'once';
        }
        el.popup = document.createElement('div');
        el.popup.innerHTML = html;
        el.form = el.popup.childNodes[0];
        el.body.appendChild(el.popup);
        

        // If the cookie is found, close the pop-up
        if (readCookie() || (form.mode !== 'always' && form.mode !== 'once')) {
            closePopUp();
        } else {
            openPopUp();
        }

        // Bind Pop-Up close button
        el.close = el.popup.querySelectorAll('.p-close')[0];
        if (el.close) {
            if (el.close.addEventListener) {
                el.close.addEventListener('click', closePopUp, false);
            } else if (el.close.attachEvent) {
                //IE8 compatib - deprecar?
                el.close.attachEvent('onclick', closePopUp);
            }
        } else {
            // Bind click outside
            var clickableLayer = document.createElement('div');
            clickableLayer.className = 'p-close-layer';
            clickableLayer.addEventListener('click', closePopUp, false);
            el.popup.insertBefore(clickableLayer, el.popup.firstChild);
        }
        if (form.mode === 'once') {
            saveCookie();
        }
    }

    // Button
    if (form.type === 'button') {
        el.container.innerHTML = t(partials.button, form);
        closePopUp();

        // Bind Pop-Up open button
        el.open = document.getElementById('p-open');
        if (el.open.addEventListener) {
            el.open.addEventListener('click', openPopUp, false);
        } else if (el.open.attachEvent) {
            el.open.attachEvent('onclick', openPopUp);
        }
    }

    // Bind form submission
    if (el.form.addEventListener) {
        el.form.addEventListener('submit', validateFields, false);
    } else if (el.form.attachEvent) {
        el.form.attachEvent('onsubmit', validateFields);
    }

    // Apply custom styling
    var buildStyle = function (name, value) {
        if (!value) return '';
        if (!layout.styles[name]) {
            // console.error('Invalid Perfit form style: ' + name);
            return '';
        }
        var style =
            layout.styles[name].selector.replace(/{{id}}/g, '#optin-form-' + id) +
            '{' +
            layout.styles[name].property +
            ':' +
            value +
            '}\n';
        return style;
    };
    var customCss = '';
    if (config.styles) {
        for (var style in config.styles) {
            if (config.styles.hasOwnProperty(style)) {
                customCss += buildStyle(style, config.styles[style]);
            }
        }
    }
    if (config.customCss) {
        customCss += config.customCss;
    }
    var headTag = document.getElementsByTagName('head')[0];

    if (customCss) {
        var customStyleTag = document.createElement('style');
        customStyleTag.type = 'text/css';
        customStyleTag.innerHTML = customCss;
        headTag.appendChild(customStyleTag);
    }
    if (
        config.fonts &&
        ((config.fonts.title && config.fonts.title.family) || (config.fonts.text && config.fonts.text.family))
    ) {
        var customFontsTag = document.createElement('style');
        customFontsTag.rel = 'stylesheet';
        customFontsTag.innerHTML = '@import url(https://fonts.googleapis.com/css2?display=swap';
        if (config.fonts.text && config.fonts.text.family) {
            customFontsTag.innerHTML +=
                '&family=' +
                encodeURIComponent(
                    config.fonts.text.family + (config.fonts.text.weight ? ':wght@' + config.fonts.text.weight : '')
                );
        }
        if (config.fonts.title && config.fonts.title.family) {
            customFontsTag.innerHTML +=
                '&family=' +
                encodeURIComponent(
                    config.fonts.title.family + (config.fonts.title.weight ? ':wght@' + config.fonts.title.weight : '')
                );
        }

        customFontsTag.innerHTML += ');\n';
        if (config.fonts.text && config.fonts.text.family) {
            customFontsTag.innerHTML +=
                '#optin-form-' + id + ' {font-family: ' + config.fonts.text.family + ' !important}\n';
        }
        if (config.fonts.title && config.fonts.title.family) {
            customFontsTag.innerHTML +=
                '#optin-form-' + id + '.p-optin .p-title {font-family: ' + config.fonts.title.family + ' !important}\n';
        }

        headTag.insertBefore(customFontsTag, headTag.firstChild);
    }

    // Manage AJAX submissions
    if (window.forceAjax || form.ajax) {
        // Bind form sumbit event
        bindSubmit = function () {
            jQuery('#optin-form-' + id).submit(function (e) {
                var form = jQuery(this),
                    content = form.find('.p-col-form').length ? form.find('.p-col-form') : form.find('.p-body'),
                    button = form.find('.p-submit');

                e.preventDefault();
                if (isValid) {
                    content.css('minHeight', content[0].clientHeight);
                    button.css('minHeight', button[0].clientHeight);
                    button.css('minWidth', button[0].clientWidth);
                    button.html(layout.partials.spinner);
                    button.attr('disbled', true);
                    form.addClass('p-submitting');
                    jQuery.ajax({
                        type: 'POST',
                        url: form.attr('action'),
                        data: form.serialize(),
                        success: function (response) {
                            if (response.success) {
                                content.html(
                                    t(partials.success, {
                                        message: response.data.userMessage,
                                    })
                                );
                                if(callbacks.submitted && callbacks.submitted instanceof Function) {
                                    callbacks.submitted();
                                }                                 
                            }
                            saveCookie();
                        },
                        error: function (response) {
                            if (!response.success) {
                                alert(response.error.userMessage);
                            } else {
                                alert(i18n[lang].submitError);
                            }
                            location.reload();
                        },
                    });
                }
            });
        };

        // If needed, add jQuery
        if (!window.jQuery) {
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.onreadystatechange = function () {
                if (this.readyState == 'complete') {
                    bindSubmit();
                }
            };
            script.onload = bindSubmit;
            script.src = jqueryURL;
            document.getElementsByTagName('head')[0].appendChild(script);
        } else {
            bindSubmit();
        }
    }

    //Export API
    return {
        open: openPopUp,
        close: closePopUp,
        form: form,
        config: config,
        setCallbacks: setCallbacks,
    };
})();