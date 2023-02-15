import logo from './logo.svg';
import styles from './App.module.css';
import _ from 'lodash';
const range = _.range


function color(row,col) {
	return (row+col)%2 == 1 ? "lightblue" : "white"
}

function App() {
	return (
		<div class={styles.App}>
			<header class={styles.header}>
				<svg viewBox="0 0 320 320" width="320" height="320">
					<For each={range(8)}>{(row) =>
						<For each={range(8)}>{(col) =>
							<rect x={row*40} y={col*40} width="40" height="40" fill={color(row,col)} />
						}</For>
					}</For>
					<text x="60" y={60+5} text-anchor="middle" alignment-baseline="middle" font-size="45" fill="black">♛</text>
					<text x="100" y={100+5} text-anchor="middle" alignment-baseline="middle" font-size="45" fill="black">♘</text>
				</svg>
			</header>
		</div>
	);
}

export default App;
