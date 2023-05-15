export default function Date({ date }) { // or ({date}) is the same as function Date(props) - (props.date) only shorter
	const data = [1, 2, 3];
	const [a, b, c] = data;

	const data1 = [{ id: 1, user: 'admin' }, { id: 2, user: 'root' }];
	const [user1, user2] = data1;


	return (
		<p className="timeline-event-thumbnail">({date}) {user1.user}
			{console.log(date)}
		</p>
	)
}

/*
[] > const [a,b,c] = arraylist
{} > const {a,b,c} = objectData
https://javascript.info/destructuring-assignment
*/