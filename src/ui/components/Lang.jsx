import { useTranslation } from 'react-i18next';

import mundo from '../../common/assets/mundo.png';
import BanderaEsp from '../../common/assets/BanderaEsp.png';
import BanderaUsa from '../../common/assets/BanderaUsa.png';

export const Lang = () => {
	const [t, i18n] = useTranslation("global");

	const handleSpanish = () => {
		i18n.changeLanguage("es");
	};

	const handleEnglish = () => {
		i18n.changeLanguage("en");
	};

	return (
		<div className="z-50">
			<ul className="nav">
				<li className="Li">
					<img className="icon" src={mundo} alt="Logo Mundo" />
					<ul className="Ul">
						<li>
							<button className="btn-flag" onClick={handleSpanish}>
								<img className="flags" src={BanderaEsp} alt="BanderaEsp" />
								{t("spanish")}
							</button>
						</li>
						<li>
							<button className="btn-flag" onClick={handleEnglish}>
								<img className="flags" src={BanderaUsa} alt="BanderaUsa" />
								{t("english")}
							</button>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};
