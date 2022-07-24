const SheetApiClientFactory = require('./sheet_api_client_factory');
const SheetDownloader = require('./sheet_downloader');

async function main() {
    try {
        const sheetApiClient = await SheetApiClientFactory.create();
        const downloader = new SheetDownloader(sheetApiClient);

        const spreadsheetId = '1XYvHmyI7g_eG4TA7p_OoxNZ55lPABml5uhiqL4JFU2k';

        const TIL = await downloader.downloadToJson(
            spreadsheetId,
            'TIL',
            'downloaded/TIL.json',
        );

        console.log({ TIL });
    } catch (e) {
        console.error(e);
    }
}

main();