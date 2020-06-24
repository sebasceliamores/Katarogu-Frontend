import React, { useState } from "react";
import {
	Container,
	Header,
	Input,
	Button,
	Select,
	ContainerSocial,
	ContainerSocial_WFI,
	ContainerMedium,
	ContainerMedium_Info,
	ContainerMedium_Check,
	ContainerStore,
	Direction,
	Attention,
	Attention_Div,
	Schedule,
	ScheduleDate,
	ContainerButtons,
	ButtonDelete,
	Overlay,
	Popup,
	Popup2,
	Popup3,
	ButtonSuspend,
} from "./styles/InformationUser";

export const InformationUser = () => {
	const [none, setNone] = useState(true);
	const [visible, setVisible] = useState(true);

	const HandlerChange = (event) => {
		if (none) {
			setNone(false);
		} else {
			setNone(true);
		}
	};

	const HandlerSelect = (event) => {
		if (
			event.target.value == "Atención normal" ||
			event.target.value == "Atención parcial"
		) {
			setVisible(false);
		} else {
			setVisible(true);
		}
	};

	return (
		<Container>
			<Header>
				<span>NombreTienda</span>
				<img src="src/images/ajustes.svg" alt="Ajustes" />
			</Header>
      <h2>Edita tu información</h2>
			<ContainerSocial>
				<ContainerSocial_WFI>
					<img src="src/images/whatsapp.svg" alt="Whatsapp" />
					<Input type="text" placeholder="Nombre" />
					<Input type="text" placeholder="Número" />
				</ContainerSocial_WFI>

				<ContainerSocial_WFI>
					<img src="src/images/facebook.svg" alt="Facebook" />
					<Input type="text" placeholder="Nombre de página" />
					<Input type="url" placeholder="https://facebook.com/username" />
				</ContainerSocial_WFI>

				<ContainerSocial_WFI>
					<img src="src/images/instagram.svg" alt="Instagram" />
					<Input type="text" placeholder="@username" />
					<Input visible={true} type="text" placeholder="@username" />
				</ContainerSocial_WFI>
			</ContainerSocial>

			<ContainerMedium>
				<ContainerMedium_Info>
					<Input type="email" placeholder="Email" />
					<Input type="text" placeholder="Nombre de empresa" />
				</ContainerMedium_Info>
				<ContainerMedium_Check>
					<input onChange={HandlerChange} type="checkbox" id="checkbox" />
					<label htmlFor="checkbox">Tengo tienda física</label>
				</ContainerMedium_Check>
			</ContainerMedium>

			<ContainerStore none={none} id="container__store">
				<Direction>
					<h2>Dirección</h2>
					<Input type="text" placeholder="Calle principal" />
					<Input type="text" placeholder="Calle secundaria" />
				</Direction>

				<Attention>
					<h2>
						¿Que tipo de atención esta brindando actualmente en su tienda
						física?
					</h2>
					<Select onChange={HandlerSelect} id="select_attention">
						<option hidden>Elija una opción</option>
						<option value="Atención normal">Atención normal</option>
						<option value="Atención parcial">Atención parcial</option>
						<option value="No estoy atendiendo">No estoy atendiendo</option>
					</Select>

					<Attention_Div id="div_h3" visible={visible}>
						<h3>Provincia</h3>
						<h3>ciudad</h3>
					</Attention_Div>

					<Attention_Div id="select_city" visible={visible}>
						<Select id="">
							<option hidden>Elija una opción</option>
							<option value="Esmeraldas">Esmeraldas</option>
						</Select>
						<Select id="">
							<option hidden>Elija una opción</option>
							<option value="Esmeraldas">Esmeraldas</option>
						</Select>
					</Attention_Div>
				</Attention>

				<Schedule id="select_schedule" visible={visible}>
					<h2>Horario de atención</h2>
					<h3>Desde</h3>
					<ScheduleDate>
						<Select id="">
							<option hidden>1-12</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</Select>
						<Select id="">
							<option hidden>AM-PM</option>
							<option value="AM">AM</option>
							<option value="PM">PM</option>
						</Select>
					</ScheduleDate>

					<h3>Hasta</h3>
					<ScheduleDate>
						<Select id="">
							<option hidden>1-12</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="0">10</option>
							<option value="11">11</option>
							<option value="12">12</option>
						</Select>
						<Select id="">
							<option hidden>AM-PM</option>
							<option value="AM">AM</option>
							<option value="AM">PM</option>
						</Select>
					</ScheduleDate>
				</Schedule>
			</ContainerStore>

			<ContainerButtons>
				<Button>Guardar</Button>
			</ContainerButtons>


		
		</Container>
	);
};
