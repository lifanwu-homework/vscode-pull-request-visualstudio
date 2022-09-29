import { IAccount } from '../../../../src/github/interface';
import { createBuilderClass } from '../../../../src/test/builders/base';

export const AccountBuilder = createBuilderClass<IAccount>()({
	login: { default: 'me' },
	name: { default: 'Myself' },
	avatarUrl: { default: 'https://avatars3.githubusercontent.com/u/17565?v=4' },
	url: { default: 'https://github.com/me' },
});
