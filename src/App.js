import React, { Fragment } from "react";
import { KataroguIntern } from "./pages/KataroguIntern";
import { KataroguExtern} from './pages/KataroguExtern'
import { ProductView_Extern } from './pages/ProductView_Extern'
import { Edit_InformationUser} from './pages/Edit_InformationUser'
import { InformationUser} from './pages/InformationUser'
import { Edit_Product } from './pages/Edit_Product'
import { ChangePassword } from './pages/ChangePassword'
import { Login } from './pages/Login'
import { Payment } from './pages/Payment'
import { GlobalStyle } from "./GlobalStyles";

import { Router, Redirect } from "@reach/router";

const UserLogged = ({children}) => {
	return children({ isAuth: false })
}

export const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
      <Router>
				<Login path='/' />

        <KataroguExtern path='/katarogu'/>
        <ProductView_Extern path='/katarogu/product' />
				<Edit_InformationUser path='/editInformation'/>
				<InformationUser path='/informationUser'/>
				<Edit_Product path='/kataroguIntern/editProduct' />
				<ChangePassword path='/changePassword' />
				<Payment path ='/payment' /> 
      </Router>

			<UserLogged>
				{
					({ isAuth }) =>
					isAuth
					?<Router>
					<KataroguIntern path='/kataroguIntern' />
					</Router>
					:<Router>
					<Payment path ='/kataroguIntern' /> 
					</Router>
				}
			</UserLogged>
		</Fragment>
	);
};
