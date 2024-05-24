(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        console.log("Browser globals (root is window)", root);
        root.ss = factory();
    }
    console.log('ss.js')
}(this, function () {
    // 모듈 코드 작성
    /**
     * 함수
     * run
     * change
     *
     * 변수
     * element: 랜더링 하는 대상
     * config<Object>
     *  - value<List> : 랜더링 값 목록
     *  - currentIndex : arrow를 이용한 현재의 위치
     * @type {{}}
     */
    var ss = {};
    const template = `
    <section>
    <p>lightning design system combobox markup</p>
    <div class="form-element" style="position: relative; min-width: 0;">
        <label class="form-element__label"
               style="overflow-wrap: break-word; word-wrap: break-word; -ms-hyphens: auto; hyphens: auto; display: inline-block; color:  #444; font-size: .75rem; padding-right: .5rem; padding-top: .25rem; margin-bottom: .125rem;">Relate
            To</label>
        <div class="form-element__control" style="clear: left; position: relative;">
            <div class="combobox_container" style="display: flex; flex-direction: column; position: relative; ">
                <div class="combobox dropdown-trigger dropdown-trigger_click"
                     style="display: flex; flex-direction: column; flex: 1 1 auto;">
                    <div class="combobox__form-element input-has-icon input-has-icon_right" style="flex: 1 1 auto; display: flex; align-items: center;"
                         role="none">
                        <input type="text" class="input combobox__input" style="color: #747474; padding: 0 1rem; width: 100%; line-height: 1.875rem; border: 1px solid #c9c9c9; border-radius: 0.25rem; background-color: #fff; box-shadow: #000; transition: border .1s, background-color .1s; display: inline-flex; text-align: left; min-height: calc(1.875rem + 2px);" aria-autocomplete="list" aria-controls="listbox-id-9" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..." />
<!--                        <div role="combobox"-->
<!--                             style="color: #747474; padding: 0 1rem; width: 100%; line-height: 1.875rem; border: 1px solid #c9c9c9; border-radius: 0.25rem; background-color: #fff; box-shadow: #000; transition: border .1s, background-color .1s; display: inline-flex; text-align: left; min-height: calc(1.875rem + 2px);"-->
<!--                             tabindex="0" class="input_faux combobox__input"-->
<!--                             aria-labelledby="combobox-label-id-5 combobox-id-53-selected-value"-->
<!--                             aria-controls="listbox-id-6" aria-expanded="false" aria-haspopup="listbox">-->
<!--                            <span class="truncate" style="line-height: 1.875rem; font-size: 0.8125rem;">Select an Option…</span>-->
<!--                        </div>-->
                        <span class="icon_container icon-utility-down input__icon input__icon_right" style="right: 0.875rem; width: 0.875rem; height: 0.875rem; position: absolute; top: 50%; margin-top:-0.5rem; line-height: 1; border: 0;display: inline-block; background-color: transparent;">
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000"  viewBox="0 0 24 24"><path
        d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/></svg>
</span>
                    </div>
                    <div id="listbox-id-6" class="dropdown dropdown_length-5 dropdown_fluid"
                         style="display: none; visibility: hidden; opacity: 0; border: 1px solid #e5e5e5; border-radius: 0.25rem; padding: .25rem 0; margin: .125rem 0; box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16); color: #181818; top: 100%; max-height: 12.5rem; overflow-y: auto; position: absolute; z-index: 7000; width: 100%; min-width: 12rem; max-width: 100%;  left: 0%; "
                         role="listbox" aria-label="Placeholder for Dropdown Items" tabindex="0" aria-busy="false">
                        <ul class="listbox listbox_vertical" role="presentation" style="font-size: 0.75rem; list-style: none;  padding: 0;">
                            <li role="presentation" class="listbox__item">
                                <div  class="media listbox__option listbox__option_plain media_small"
                                      style="padding: 0.5rem 0.75rem; display: flex; align-items: flex-start;"
                                     role="option">
                                    <span class="media__figure listbox__option-icon"></span>
                                    <span class="media__body">
<span class="truncate" title="Accounts">Accounts</span>
</span>
                                </div>
                            </li>
                            <li role="presentation" class="listbox__item">
                                <div id="option34" class="media listbox__option listbox__option_plain media_small"
                                     style="padding: 0.5rem 0.75rem; display: flex; align-items: flex-start;"
                                     role="option">
                                    <span class="media__figure listbox__option-icon"></span>
                                    <span class="media__body">
<span class="truncate" title="Reports">Reports</span>
</span>
                                </div>
                            </li>
                            <li role="presentation" class="listbox__item">
                                <div id="option35" class="media listbox__option listbox__option_plain media_small"
                                     style="padding: 0.5rem 0.75rem; display: flex; align-items: flex-start;"
                                     role="option">
                                    <span class="media__figure listbox__option-icon"></span>
                                    <span class="media__body">
<span class="truncate" title="Contacts">Contacts</span>
</span>
                                </div>
                            </li>
                            <li role="presentation" class="listbox__item">
                                <div id="option36" class="media listbox__option listbox__option_plain media_small"
                                     style="padding: 0.5rem 0.75rem; display: flex; align-items: flex-start;"
                                     role="option">
                                    <span class="media__figure listbox__option-icon"></span>
                                    <span class="media__body">
<span class="truncate" title="Files">Files</span>
</span>
                                </div>
                            </li>
                            <li role="presentation" class="listbox__item">
                                <div id="option37" class="media listbox__option listbox__option_plain media_small"
                                     style="padding: 0.5rem 0.75rem; display: flex; align-items: flex-start;"
                                     role="option">
                                    <span class="media__figure listbox__option-icon"></span>
                                    <span class="media__body">
<span class="truncate" title="Groups">Groups</span>
</span>
                                </div>
                            </li>
                            <li role="presentation" class="listbox__item">
                                <div id="option38" class="media listbox__option listbox__option_plain media_small"
                                     style="padding: 0.5rem 0.75rem; display: flex; align-items: flex-start;"
                                     role="option">
                                    <span class="media__figure listbox__option-icon"></span>
                                    <span class="media__body">
<span class="truncate" title="Leads">Leads</span>
</span>
                                </div>
                            </li>
                            <li role="presentation" class="listbox__item">
                                <div id="option39" class="media listbox__option listbox__option_plain media_small"
                                     style="padding: 0.5rem 0.75rem; display: flex; align-items: flex-start;"
                                     role="option">
                                    <span class="media__figure listbox__option-icon"></span>
                                    <span class="media__body">
<span class="truncate" title="Notes">Notes</span>
</span>
                                </div>
                            </li>
                            <li role="presentation" class="listbox__item">
                                <div id="option40" class="media listbox__option listbox__option_plain media_small"
                                     style="padding: 0.5rem 0.75rem; display: flex; align-items: flex-start;"
                                     role="option">
                                    <span class="media__figure listbox__option-icon"></span>
                                    <span class="media__body">
<span class="truncate" title="Groups">Groups</span>
</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`

    const noListTemplate = `
    <section>
    <p>lightning design system combobox markup</p>
    <div class="form-element" style="position: relative; min-width: 0;">
        <label class="form-element__label"
               style="overflow-wrap: break-word; word-wrap: break-word; -ms-hyphens: auto; hyphens: auto; display: inline-block; color:  #444; font-size: .75rem; padding-right: .5rem; padding-top: .25rem; margin-bottom: .125rem;">Relate
            To</label>
        <div class="form-element__control" style="clear: left; position: relative;">
            <div class="combobox_container" style="display: flex; flex-direction: column; position: relative; ">
                <div class="combobox dropdown-trigger dropdown-trigger_click"
                     style="display: flex; flex-direction: column; flex: 1 1 auto;">
                    <div class="combobox__form-element input-has-icon input-has-icon_right" style="flex: 1 1 auto; display: flex; align-items: center;"
                         role="none">
                        <input type="text" class="input combobox__input" style="color: #747474; padding: 0 1rem; width: 100%; line-height: 1.875rem; border: 1px solid #c9c9c9; border-radius: 0.25rem; background-color: #fff; box-shadow: #000; transition: border .1s, background-color .1s; display: inline-flex; text-align: left; min-height: calc(1.875rem + 2px);" aria-autocomplete="list" aria-controls="listbox-id-9" aria-expanded="false" aria-haspopup="listbox" autoComplete="off" role="combobox" placeholder="Search..." />
                        <span class="icon_container icon-utility-down input__icon input__icon_right" style="right: 0.875rem; width: 0.875rem; height: 0.875rem; position: absolute; top: 50%; margin-top:-0.5rem; line-height: 1; border: 0;display: inline-block; background-color: transparent;">
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000"  viewBox="0 0 24 24"><path
        d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"/></svg>
</span>
                    </div>
                    <div id="listbox-id-6" class="dropdown dropdown_length-5 dropdown_fluid"
                         style="border: 1px solid #e5e5e5; border-radius: 0.25rem; padding: .25rem 0; margin: .125rem 0; box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16); color: #181818;  top: 100%; max-height: 12.5rem; overflow-y: auto; position: absolute; z-index: 7000; width: 100%; min-width: 12rem; max-width: 100%;  left: 0%; "
                         role="listbox" aria-label="Placeholder for Dropdown Items" tabindex="0" aria-busy="false">
                        <ul class="listbox listbox_vertical" role="presentation" style="font-size: 0.75rem; list-style: none;  padding: 0;">
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
    .dropdown {
    display: none; visibility: hidden; opacity: 0; 
    }
    .dropdown-trigger.is-open .dropdown {
    display: block; visibility: visible; opacity: 1;
    }
    .listbox .listbox__item:hover {
    background-color: #f3f3f3;
    cursor: pointer;
    }
    .listbox .listbox__item[current="true"] {
    background-color: #f3f3f3;
    }
    </style>
</section>
    `

    const listItemTemplate = `
    <li role="presentation" class="listbox__item" current="{!current}">
                                <div id="option40" class="media listbox__option listbox__option_plain media_small"
                                     style="padding: 0.5rem 0.75rem; display: flex; align-items: flex-start;"
                                     role="option">
                                    <span class="media__figure listbox__option-icon">{!value}</span>
                                    <span class="media__body">
</span>
                                </div>
                            </li>
    `


    ss.hello = function () {
        console.log('Hello, World!');
    };

    ss.run = function (selector, config) {
        // param
        // selector: string
        // config: object
        //  - value : List<String>

        if (!selector) {
            console.error('selector is required')
            return
        }

        if (!config?.value || !Array.isArray(config.value)) {
            console.error('config.value is required')
            return
        }

        const targetElement = document.querySelector(selector);
        if (!targetElement) {
            console.error(`There is no ${target} element`)
            return
        }

        // parameter값 초기화
        ss.config = config;
        ss.element = targetElement;
        // ss.currentIndex = -1;
        resetCurrentIndex();
        ss.isDropdownOpen = false;
        targetElement.innerHTML = noListTemplate;
        //
        // let listGenerator = '';
        // config.value.forEach((item) => {
        //     // let copyListItemTemplate =
        //     listGenerator += listItemTemplate.replace('{!value}', item)
        // });
        // targetElement.querySelector('.listbox').innerHTML = listGenerator;
        //

        /** test command
         * ss.run('.target', {value: ['apple', 'banana', 'carrot', 'melon']})
         */


        // dom select하여 temmplate을 넣어준다.

        // dom 의 필요한 event 삽입

        // config값으로 필요한 것
        /**
         *
         */
        // 랜더링 부분

        // 이벤트 적용 부분
        targetElement.addEventListener('click', activeCombobox);
        document.addEventListener('click', deActiveCombobox);
        targetElement.addEventListener('tab', activeCombobox);
        targetElement.querySelector('.listbox').addEventListener('click', clickListItem)
        targetElement.querySelector('input').addEventListener('keyup', keyupInput)
    }

    /** callback function **/
    function activeCombobox(event) {
        event.stopPropagation();
        ss.element.querySelector('.dropdown-trigger').classList.add('is-open')
        ss.isDropdownOpen = true;

        listRendering();

        console.log('activeCombobox', ss.element, event)
    }

    function deActiveCombobox() {
        ss.element.querySelector('.dropdown-trigger').classList.remove('is-open')
        ss.element.querySelector('.listbox').innerHTML = '';
        ss.isDropdownOpen = false;
        // ss.currentIndex = -1;
        resetCurrentIndex();
        console.log('deActiveCombobox', ss.element);
    }

    function clickListItem(event) {
        console.log('clickListItem', event.target.innerText)
        setInputValue(event.target.innerText);
        event.stopPropagation();
        deActiveCombobox(event);
    }

    function setInputValue(text) {
        ss.element.querySelector('input').value = text
    }

    function keyupInput(event) {
        console.log('keyupInput', event)

        // enter key
        switch (event.key) {
            case 'Enter':
                console.log('key value', event.key);
                fuzzySearch();
                deActiveCombobox();
                break;
            case 'ArrowDown':
                calcCurrentIndex(1);
                // listRendering();
                activeCombobox(event);
                break;
            case 'ArrowUp':
                calcCurrentIndex(-1);
                // listRendering();
                activeCombobox(event);
                break;
            case 'ArrowLeft':
            case 'ArrowRight':
                console.log('arrow key');
                break;
            case 'Escape':
                deActiveCombobox();
                break;
            default:
                console.log('default case');
                resetCurrentIndex();
                // listRendering();
                activeCombobox(event);
                break;

        }
    }

    function listRendering() {
        // input value에 따라 list를 필터링한다.
        // listbox reset
        ss.element.querySelector('.listbox').innerHTML = '';

        // list값 생성
        const inputValue = ss.element.querySelector('input').value;
        let listGenerator = '';
        let filteredList = ss.config.value.filter(v => v.includes(inputValue))
        ss.values = filteredList;

        if (filteredList.length === 0) {
            console.log('no value');
            deActiveCombobox();
            return;
        }

        filteredList.forEach((item, index) => {
            let temp = listItemTemplate;
            temp = (index === ss.currentIndex) ? temp.replace('{!current}', 'true') : temp.replace('{!current}', 'false');
            listGenerator += temp.replace('{!value}', item)
            console.log('temp', index, typeof index, ss.currentIndex, typeof ss.currentIndex)

            // listGenerator += listItemTemplate.replace('{!value}', item)
        })

        // list값 랜더링
        ss.element.querySelector('.listbox').innerHTML = listGenerator;
    }

    function calcCurrentIndex(number) {
        if (! Array.isArray(ss.values)) { return }

        console.log('calcCurrentIndex', ss.currentIndex, ss.values.length, number)

        if (number > 0) {
            ( (ss.currentIndex + 1) > (ss.values.length - 1) ) ? ss.currentIndex = (ss.values.length - 1) : ss.currentIndex += 1;
        } else {
            ( (ss.currentIndex - 1) < 0 ) ? ss.currentIndex = (ss.values.length = 0) : ss.currentIndex -= 1;
        }
    }

    function resetCurrentIndex () {
        ss.currentIndex = -1;
    }

    function getInputValue() {
        return ss.element.querySelector('input').value
    }

    function fuzzySearch() {
        console.log('fuzzySearch', ss.values, ss.currentIndex);

        // dropdown이 안 열려 있으면 진행하지 않음.
        if (!ss.isDropdownOpen) { return }

        // list에  아무런 값이 없으면  return null
        if (!ss?.values || ss.values.length === 0) {
            console.log('values 0')
            return null;
        }

        // 현재 input value의 값과 비슷 한 값을 가져오기
        // arrow key로 선택한 값이 있다면 해당 값을 선택하기.
        if (ss.currentIndex === -1) {
            setInputValue(ss.values[0]);
        } else {
            setInputValue(ss.values[ss.currentIndex]);
        }
    }
    return ss;
}));
