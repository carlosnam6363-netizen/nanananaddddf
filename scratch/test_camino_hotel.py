import asyncio
from playwright.async_api import async_playwright

async def verify_camino_hotel():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        console_errors = []
        page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)

        file_url = 'file:///C:/Users/user/.gemini/antigravity/scratch/career-dashboard/index.html'
        await page.goto(file_url, wait_until='networkidle')

        # 1. Switch to Camino tab
        await page.evaluate("window.app.switchTab('camino')")
        await asyncio.sleep(1)

        # 2. Check if Stay Hotel Trindade exists in the DOM
        content = await page.content()
        assert '스테이 호텔 포르투 센트로 트린다데' in content, "Hotel name not rendered!"
        assert '1400829745971821' in content, "Booking number not rendered!"
        assert '7999' in content, "PIN number not rendered!"
        assert '132,615' in content, "Paid amount not rendered!"
        print("✓ Hotel Reservation Card correctly rendered!")

        # 3. Check Day 1 & Day 2 itinerary in active route table
        day1_val = await page.evaluate("""() => {
            const inputs = Array.from(document.querySelectorAll('#tab-content-camino input'));
            return inputs.map(i => i.value);
        }""")
        has_hotel_input = any('스테이 호텔' in val for val in day1_val)
        assert has_hotel_input, f"Day 1 / 2 hotel inputs not updated! Values: {day1_val[:5]}"
        print("✓ Day 1 & Day 2 hotel values in itinerary table correctly loaded!")

        # 4. Check console errors
        assert len(console_errors) == 0, f"Console errors found: {console_errors}"
        print("✓ Zero console errors!")

        await browser.close()
        print("\n🎉 ALL CAMINO HOTEL TESTS PASSED SUCCESSFULLY!")

if __name__ == '__main__':
    asyncio.run(verify_camino_hotel())
