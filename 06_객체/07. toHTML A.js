let products = [
    { name : '바나나', price : 1200},
    { name : '사과', price : 2000},
    { name : '배', price : 3000},
    { name : '고구마', price : 700},
    { name : '감자', price : 600},
    { name : '수박', price : 5000},
];
let html = `
<table style="width:60%">
    <thead>
    <tr>
        <th>품목</th>
        <th>가격</th>
    </tr>
    </thead>
        <tbody>
        <tr>
            <td>바나나</td>
            <td>1200</td>
        </tr>
        <tr>
            <td>사과</td>
            <td>2000</td>
        </tr>
        <tr>
            <td>배</td>
            <td>3000</td>
        </tr>
        <tr>
            <td>고구마</td>
            <td>700</td>
        </tr>
        <tr>
            <td>감자</td>
            <td>600</td>
        </tr>
        <tr>
            <td>수박</td>
            <td>5000</td>
        </tr>
        </tbody>
</table>
    `;

for(let products of html){

}
html += 
console.log(html);
