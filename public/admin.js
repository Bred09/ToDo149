var modalWindow = document.querySelector('.obsh');
function poObsh() {
	modalWindow.style.display = 'block';
}

function closeWindow() {
	modalWindow.style.display = 'none';
}

var iTbl = `
	<table border="1" cellspacing="0" class="block">
		<tr>
			<th title="Урок">№</th>
			<th title="Расписание звонков">Расп. звон.</th>
			<th><input title="Класс" placeholder="класс" /></th>
			<th class="cab" title="Кабинет">Каб.</th>
			<th><input title="Класс" placeholder="класс" /></th>
			<th class="cab" title="Кабинет">Каб.</th>
			<th><input title="Класс" placeholder="класс" /></th>
			<th class="cab" title="Кабинет">Каб.</th>
		</tr>



		<tr>
			<td>1</td>
			<td>08:00-09:10</td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
		</tr>
		<tr>
			<td>2</td>
			<td>09:25-10:05</td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
		</tr>
		<tr>
			<td>3</td>
			<td>10:25-11:05</td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
		</tr>
		<tr>
			<td>4</td>
			<td>11:25-12:05</td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
		</tr>
		<tr>
			<td>5</td>
			<td>12:20-13:00</td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
		</tr>
		<tr>
			<td>6</td>
			<td>13:15-13:55</td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
		</tr>
		<tr>
			<td>7</td>
			<td>14:10-14:50</td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
		</tr>
		<tr>
			<td>8</td>
			<td>15:05-15:45</td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
		</tr>
		<tr>
			<td>9</td>
			<td>15:55-16:35</td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
			<td><input type="text" placeholder="предмет"></td>
			<td><input class="cab" type="text" placeholder="каб." title="кабинет"></td>
		</tr>
	</table>`

var block = document.querySelector('.add');
var table = document.querySelector('.box');
var td = '<td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>';
var tr = '<th><input></th><th><input></th><th><input></th><th><input></th><th><input></th>';

function add (){
	table.innerHTML += `<br><table> ${iTbl} </table>`;
}