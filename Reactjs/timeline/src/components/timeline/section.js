export default function Section({ list, children, title }) {
	// the same as: const children, title = props - (props)
	return (
		<div>
			<p><strong>{title}</strong><br /><ul>{list.map((tech, index) => (
				<li>{tech}</li>
			))
			}
			</ul>
			</p>
		</div>

	)
}