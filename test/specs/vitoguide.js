describe('Vitoguide login page', () => {
    it('Maintainer should land on installations page after proper login', async () => {
        await browser.url('https://vitoguide.viessmann.com/')
        const loginButton = await $('#gtm_user-btn')
        await loginButton.click()

        const userName = await $('#isiwebuserid')
        await userName.setValue('vitoguidetest@viessmann.com')
        const password = await $('#isiwebpasswd')
        await password.setValue('Test1234!')

        const login = await $('#loginButton')
        await login.click()

        await expect(browser).toHaveUrlContaining('/installations')
    })
})
