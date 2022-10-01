# How to Contribute

It's relatively simple! Take a look at the [documentation](https://api.norcapsecurities.com/admin_v3/documentation), find which endpoint hasn't been covered
yet. Normally, you will want to do the following on github:

1. Open an issue

2. Open a pull request addressing the issue

3. Create a folder in `/src` with the name of the `ENDPOINT`. Create the following files:

   - `/src/ENDPOINT/index.ts` - function file to call the api endpoint
   - `/src/ENDPOINT/index.spec.ts` - test file to mock the api calls
   - `/src/ENDPOINT/types.ts` - types file just for this specific endpoint
   - `/src/ENDPOINT/enums.ts` - enums file (optional)

4. Once all the lints/tests pass locally, edit `package.json` and bump the version number (e.g. 0.0.1 -> 0.0.2).

5. Await the PR to be approved!
