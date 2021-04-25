import isEmail from 'validator/es/lib/isEmail';
import vest, { enforce, test } from 'vest';

enforce.extend({ isEmail });

const validate = vest.create('contactForm', (data = {}, changedField) => {
	vest.only(changedField);

	test('username', 'Pole imię jest puste.', () => {
		enforce(data.username).isNotEmpty().longerThanOrEquals(3);
	});

	test('username', 'Pole imię zawiera nieprawidłowe znaki.', () => {
		enforce(data.username).matches(/[a-zA-ZąęśćółńżźĄĘŚĆÓŁŃŻŹ\-]/).notMatches(/[0-9]/);
	});

	test('email', 'Pole email jest puste.', () => {
		enforce(data.email).isNotEmpty();
	});

	test('email', 'Adres email nie jest poprawny.', () => {
		enforce(data.email).isEmail();
	});

	test('message', 'Wiadomość jest pusta.', () => {
		enforce(data.message).isNotEmpty();
	});
});

export default validate;
