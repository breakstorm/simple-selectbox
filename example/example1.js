document.addEventListener('DOMContentLoaded', function() {

    // 시작
    console.log('start')

    function test() {
        console.log('test')
    }

    // 기본 템플릿
    const basicTemplate = `
        <select name="example1" id="">
            <option value="apple">apple</option>
            <option value="banana">banana</option>
            <option value="carrot">carrot</option>
            <option value="melon">melon</option>
        </select>
`

    // inject
    const targetElement = document.querySelector('.target')
    console.log(targetElement)
    targetElement.innerHTML = basicTemplate
})