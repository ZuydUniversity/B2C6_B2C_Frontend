import "./styles/physiosessionresultspage.css";
import React from "react";

const Physiosessionresultspage: React.FC = () => {
	return (
		<div className="container">
			<div className="header">
				<h2>Resultaten scan</h2>
			</div>
			<div className="results-section">
				<h3>Myometrie uitslagen</h3>
				<table>
					<thead>
						<tr>
							<th>Aspect</th>
							<th>Mini Titel</th>
							<th>Mini Titel</th>
							<th>Mini Titel</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Links</td>
							<td>Schouder</td>
							<td>35/50</td>
							<td>32/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Rechts</td>
							<td>Schouder</td>
							<td>40/50</td>
							<td>38/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Links</td>
							<td>Heup</td>
							<td>28/50</td>
							<td>30/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Rechts</td>
							<td>Heup</td>
							<td>29/50</td>
							<td>31/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Links</td>
							<td>Knie</td>
							<td>33/50</td>
							<td>35/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Rechts</td>
							<td>Knie</td>
							<td>34/50</td>
							<td>36/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Links</td>
							<td>Enkel</td>
							<td>22/50</td>
							<td>25/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Rechts</td>
							<td>Enkel</td>
							<td>23/50</td>
							<td>26/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Links</td>
							<td>Pols</td>
							<td>15/50</td>
							<td>18/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Rechts</td>
							<td>Pols</td>
							<td>16/50</td>
							<td>19/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Links</td>
							<td>Rug</td>
							<td>30/50</td>
							<td>28/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Rechts</td>
							<td>Rug</td>
							<td>31/50</td>
							<td>29/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Links</td>
							<td>Nek</td>
							<td>20/50</td>
							<td>22/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
						<tr>
							<td>Rechts</td>
							<td>Nek</td>
							<td>21/50</td>
							<td>23/50</td>
							<td>
								<button className="view-button">🔍</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Physiosessionresultspage;
