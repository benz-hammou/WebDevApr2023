import Date from "./date"
import Section from "./section"

const Event = ({ company, jobtitle }) => {
	return (

		<li className="timeline-event">
			<label className="timeline-event-icon"></label>
			<div className="timeline-event-copy">
				<Date date="April 2023" />
				<h3>Awesome, thanks! {company}</h3>
				<h4>{jobtitle}</h4>
				<Section title="Technologies"
					// {/* <ul>
					// 	<li> Next.js</li>
					// 	<li> React.js</li>
					// 	<li> Vue.js</li>
					// 	<li> Node.js</li>
					// </ul> */}
					list={['React.js', 'Next.js', 'Vua.js', 'Node.js']} />
				{/* </Section> */}

				<Section title="Tools"
					// {/* <ul>
					// 	<li> VSCode</li>
					// 	<li> Live Server</li>
					// 	<li> Json</li>
					// </ul> */}
					list={['VSCode', 'Live Server', 'Json-server']} />
				{/* </Section> */}
			</div>
		</li>

	)
}
export default Event