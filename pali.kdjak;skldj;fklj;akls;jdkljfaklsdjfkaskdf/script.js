document.getElementById('submitBtn').addEventListener('click', function() {
    let inputWord = document.getElementById('inputWord').value; 
    const selectedType = document.getElementById('typeSelect').value;

    // Remove trailing characters for other types
    if (selectedType !== "វិភត្តិ") {
        inputWord = inputWord.replace(/[ាិឹុូេ]$/g, '');
    }

    let output = '';

            // វិភត្តិ (គ្មាន trim)
            if (selectedType === "វិភត្តិ") {
                output = `                ពាក្យ បញ្ចូលនឹង វិភត្តិ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប-សិ. រី${inputWord} |យោ. រី${inputWord}ទ
                ទុ- ំ. នូវ${inputWord} កាន់${inputWord} ញ៉ាំង${inputWord} អស់${inputWord} នឹង${inputWord} ចំពោះ${inputWord} |យោ. នូវ${inputWord}ទ កាន់${inputWord}ទ ញ៉ាំង${inputWord}ទ អស់${inputWord}ទ នឹង${inputWord}ទ ចំពោះ${inputWord}ទ
                ត-នា. ដោយ${inputWord} ដោយនូវ${inputWord} តាម${inputWord} ខាង${inputWord} គឺ${inputWord} ដែល${inputWord} ត្រូវ${inputWord} ហេតុ${inputWord} ព្រោះ${inputWord} ព្រោះតែ${inputWord} មាន${inputWord} |ហិ. ដោយ${inputWord}ទ ដោយនូវ${inputWord}ទ តាម${inputWord}ទ ខាង${inputWord}ទ គឺ${inputWord}ទ ដែល${inputWord}ទ ត្រូវ${inputWord}ទ ហេតុ${inputWord}ទ ព្រោះ${inputWord}ទ ព្រោះតែ${inputWord}ទ មាន${inputWord}ទ
                ច-ស. ដល់${inputWord} ដើម្បី${inputWord} បំរុង${inputWord} នឹង${inputWord} ចំពោះ${inputWord} |នំ. ដល់${inputWord}ទ ដើម្បី${inputWord}ទ បំរុង${inputWord}ទ នឹង${inputWord}ទ ចំពោះ${inputWord}ទ
                ប-ស្មា. អំពី${inputWord} ចាក${inputWord} ជាង${inputWord} ហេតុ${inputWord} ព្រោះ${inputWord} ព្រោះតែ${inputWord} |ហិ. អំពី${inputWord}ទ ចាក${inputWord}ទ ជាង${inputWord}ទ ហេតុ${inputWord}ទ ព្រោះ${inputWord}ទ ព្រោះតែ${inputWord}ទ
                ឆ-ស. នៃ${inputWord} របស់${inputWord} កាល${inputWord} កាលបើ${inputWord} កាលដែល${inputWord} ជំនុះ${inputWord} បណ្ដា${inputWord} |នំ. នៃ${inputWord}ទ របស់${inputWord}ទ កាល${inputWord}ទ កាលបើ${inputWord}ទ កាលដែល${inputWord}ទ ជំនុះ${inputWord}ទ បណ្ដា${inputWord}ទ
                ស-ស្មឹ. ក្នុង${inputWord} ឰដ៏${inputWord} ត្រង់${inputWord} នា${inputWord} នាកាល${inputWord} កាលបើ${inputWord} កាលដែល${inputWord} និមិត្ត${inputWord} ជំនុំ${inputWord} បណ្ដា${inputWord} លើ${inputWord} ទៀប${inputWord} ជិត${inputWord} |សុ. ក្នុង${inputWord}ទ ឰដ៏${inputWord}ទ ត្រង់${inputWord}ទ នា${inputWord}ទ នាកាល${inputWord}ទ កាលបើ${inputWord}ទ កាលដែល${inputWord}ទ និមិត្ត${inputWord}ទ ជំនុំ${inputWord}ទ បណ្ដា${inputWord}ទ លើ${inputWord}ទ ទៀប${inputWord}ទ ជិត${inputWord}ទ
                អា-សិ. បពិត្រ${inputWord} ម្នាល${inputWord} នែ${inputWord} ហៃ${inputWord} |យោ. បពិត្រ${inputWord}ទ ម្នាល${inputWord}ទ នែ${inputWord}ទ ហៃ${inputWord}ទ`;
            } 

            // បុំលិង្គ
            else if (selectedType === "អ-ការន្ដ បុំលិង្គ") {
                output = `                អ-ការន្ដ បុំលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. ${inputWord}ោ | ${inputWord}ា
                ទុ. ${inputWord}ំ | ${inputWord}េ
                ត. ${inputWord}េន | ${inputWord}េហិ ${inputWord}េភិ
                ច. ${inputWord}ស្ស ${inputWord}ាយ ${inputWord}ា | ${inputWord}ានំ
                ប. ${inputWord}ស្ស ${inputWord}ម្ហា ${inputWord}ា | ${inputWord}េហិ ${inputWord}េភិ
                ឆ. ${inputWord}ស្ស | ${inputWord}ានំ
                ស. ${inputWord}ស្មឹ ${inputWord}ម្ហិ ${inputWord}េ | ${inputWord}េសុ
                អា. ${inputWord} | ${inputWord}ា`;
            } 
            else if (selectedType === "ឥ-ការន្ដ បុំលិង្គ") {
                output = `                ឥ-ការន្ដ បុំលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ិ | ${inputWord}ោ ${inputWord}ា
                ទុ.  ${inputWord}ឹ | ${inputWord}ោ ${inputWord}ា
                ត. 	${inputWord}ិនា | ${inputWord}ីហិ ${inputWord}នីភិ
                ច. 	${inputWord}ិស្ស ${inputWord}ិនោ | ${inputWord}ីនំ
                ប. 	${inputWord}ិស្ស ${inputWord}ិម្ហា ${inputWord}ិនា | ${inputWord}ីហិ ${inputWord}ីភិ
                ឆ. 	${inputWord}ិស្ស ${inputWord}ិនោ | ${inputWord}ីនំ
                ស. 	${inputWord}ិស្មឹ ${inputWord}ិម្ហិ | ${inputWord}ីសុ
                អា. ${inputWord}ិ | ${inputWord}ោ ${inputWord}ា`;
            }
            else if (selectedType === "ឦ-ការន្ដ បុំលិង្គ") {
                output = `                ឦ-ការន្ដ បុំលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ី | ${inputWord}ិនោ ${inputWord}ី
                ទុ.  ${inputWord}ឹ ${inputWord}ិនំ | ${inputWord}ិនោ ${inputWord}ី
                ត. 	${inputWord}ិនា | ${inputWord}ីហិ ${inputWord}ីភិ
                ច. 	${inputWord}ិស្ស ${inputWord}ិនោ | ${inputWord}ីនំ
                ប. 	${inputWord}ិស្ស ${inputWord}ិម្ហា ${inputWord}ិនា | ${inputWord}ីហិ ${inputWord}ីភិ
                ឆ. 	${inputWord}ិស្ស ${inputWord}ិនោ | ${inputWord}ីនំ
                ស. 	${inputWord}ិស្មឹ ${inputWord}ិម្ហិ | ${inputWord}ីសុ
                អា. ${inputWord}ិ | ${inputWord}ិនោ ${inputWord}ី`;
            }
            else if (selectedType === "ឧ-ការន្ដ បុំលិង្គ") {
                output = `                ឧ-ការន្ដ បុំលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ុ | ${inputWord}វោ ${inputWord}ូ
                ទុ. 	${inputWord}ុំ | ${inputWord}វោ ${inputWord}ូ
                ត. 	${inputWord}ុនា | ${inputWord}ូហិ ${inputWord}ូភិ
                ច. 	${inputWord}ុស្ស ${inputWord}ុនោ | ${inputWord}ូនំ
                ប. 	${inputWord}ុស្ស ${inputWord}ុម្ហា ${inputWord}ុនា | ${inputWord}ូហិ ${inputWord}ូភិ
                ឆ. 	${inputWord}ុស្ស ${inputWord}ុនោ | ${inputWord}ូនំ
                ស. 	${inputWord}ុស្មឹ ${inputWord}ុម្ហិ | ${inputWord}ូសុ
                អា. ${inputWord}ុ | ${inputWord}វេ ${inputWord}វោ`;
            }
            else if (selectedType === "ឩ-ការន្ដ បុំលិង្គ") {
                output = `                ឩ-ការន្ដ បុំលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ូ | ${inputWord}ុនោ ${inputWord}ូ
                ទុ.  ${inputWord}ុំ | ${inputWord}ុនោ ${inputWord}ូ
                ត. 	${inputWord}ុនា | ${inputWord}ូហិ ${inputWord}ូភិ
                ច. 	${inputWord}ុស្ស ${inputWord}ុនោ | ${inputWord}ូនំ
                ប. 	${inputWord}ុស្ស ${inputWord}ុម្ហា ${inputWord}ុនា | ${inputWord}ូហិ ${inputWord}ូភិ
                ឆ.  ${inputWord}ុស្ស ${inputWord}ុនោ | ${inputWord}ូនំ
                ស. 	${inputWord}ុស្មឹ ${inputWord}ុម្ហិ | ${inputWord}ូសុ
                អា.  ${inputWord}ុ | ${inputWord}ុនោ ${inputWord}ូ`;
            }

            // ឥត្ថីលិង្គ
            else if (selectedType === "អា-ការន្ដ ឥត្ថីលិង្គ") {
                output = `                អា-ការន្ដ ឥត្ថីលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ា | ${inputWord}ាយោ ${inputWord}ា
                ទុ. 	${inputWord}ំ | ${inputWord}ាយោ ${inputWord}ា
                ត. 	${inputWord}ាយ | ${inputWord}ាហិ ${inputWord}ាភិ
                ច.  ${inputWord}ាយ | ${inputWord}ានំ
                ប. 	${inputWord}ាយ | ${inputWord}ាហិ ${inputWord}ាភិ
                ឆ. 	${inputWord}ាយ | ${inputWord}ានំ
                ស. 	${inputWord}ាយ  ${inputWord}ាយំ | ${inputWord}ាសុ
                អា. ${inputWord}េ | ${inputWord}ាយោ ${inputWord}ា`;
            } 
            else if (selectedType === "ឥ-ការន្ដ ឥត្ថីលិង្គ") {
                output = `               ឥ-ការន្ដ ឥត្ថីលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ិ | ${inputWord}ិយោ ${inputWord}ី
                ទុ.  ${inputWord}ឹ | ${inputWord}ិយោ ${inputWord}ី
                ត.  ${inputWord}ិយ | ${inputWord}ីហិ ${inputWord}ីភិ
                ច.  ${inputWord}ិយ | ${inputWord}ីនំ
                ប.  ${inputWord}ិយ | ${inputWord}ីហិ ${inputWord}ីភិ
                ឆ.  ${inputWord}ិយ | ${inputWord}ីនំ
                ស. 	${inputWord}ិយ ${inputWord}ិយំ | ${inputWord}ីសុ
                អា. ${inputWord}ិ | ${inputWord}ិយោ ${inputWord}ីា`;
            }
            else if (selectedType === "ឦ-ការន្ដ ឥត្ថីលិង្គ") {
                output = `                ឦ-ការន្ដ ឥត្ថីលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ី | ${inputWord}ិយោ ${inputWord}ី
                ទុ. 	${inputWord}ឹ | ${inputWord}ិយោ ${inputWord}ី
                ត. 	${inputWord}ិយ | ${inputWord}ីហិ ${inputWord}ីភិ
                ច. ${inputWord}ិយ | ${inputWord}ីនំ
                ប. 	${inputWord}ិយ | ${inputWord}ីហិ ${inputWord}ីភិ
                ឆ. 	${inputWord}ិយ | ${inputWord}ីនំ
                ស. ${inputWord}ិយ ${inputWord}ិយំ | ${inputWord}ីសុ
                អា. ${inputWord}ិ | ${inputWord}ិយោ ${inputWord}ី`;
            }
            else if (selectedType === "ឧ-ការន្ដ ឥត្ថីលិង្គ") {
                output = `                ឧ-ការន្ដ ឥត្ថីលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ុ | ${inputWord}ុយោ ${inputWord}ូ
                ទុ.  ${inputWord}ុំ | ${inputWord}ុយោ ${inputWord}ូ
                ត. 	${inputWord}ុយា | ${inputWord}ូហិ ${inputWord}ូភិ
                ច. 	${inputWord}ុយា | ${inputWord}ូនំ
                ប. 	${inputWord}ុយា | ${inputWord}ូហិ ${inputWord}ូភិ
                ឆ. 	${inputWord}ុយា | ${inputWord}ូនំ
                ស. 	${inputWord}ុយា ${inputWord}ុយំ | ${inputWord}ូសុ
                អា. ${inputWord}ុ | ${inputWord}ុយោ ${inputWord}ូ`;
            }
            else if (selectedType === "ឩ-ការន្ដ ឥត្ថីលិង្គ") {
                output = `                ឩ-ការន្ដ ឥត្ថីលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ូ | ${inputWord}ុយោ ${inputWord}ូ
                ទុ. 	${inputWord}ុំ | ${inputWord}ុយោ ${inputWord}ូ
                ត. 	${inputWord}ុយា | ${inputWord}ូហិ ${inputWord}ូភិ
                ច. 	${inputWord}ុយា | ${inputWord}ូនំ
                ប. 	${inputWord}ុយា | ${inputWord}ូហិ ${inputWord}ូភិ
                ឆ. 	${inputWord}ុយា | ${inputWord}ូនំ
                ស. 	${inputWord}ុយា ${inputWord}ុយំ | ${inputWord}ូសុ
                អា. ${inputWord}ុ | ${inputWord}ុយោ ${inputWord}ូ`;
            }
            
            // នបុំសកលិង្គ
            else if (selectedType === "អ-ការន្ដ នបុំសកលិង្គ") {
                output = `                អ-ការន្ដ នបុំសកលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ំ | ${inputWord}ានិ ${inputWord}ា
                ទុ. 	${inputWord}ំ  | ${inputWord}ានិ ${inputWord}េ
                ត. 	${inputWord}េន | ${inputWord}េហិ ${inputWord}េភិ
                ច. 	${inputWord}ស្ស ${inputWord}ាយ ${inputWord}ត្ថំ | ${inputWord}ានំ
                ប. 	${inputWord}ស្ស ${inputWord}ម្ហា ${inputWord}ា | ${inputWord}េហិ ${inputWord}េភិ
                ឆ. 	${inputWord}ស្ស | ${inputWord}ានំ
                ស. 	${inputWord}ស្មឹ ${inputWord}ម្ហិ ${inputWord}េ | ${inputWord}េសុ
                អា. ${inputWord}ា |${inputWord}ានិ ${inputWord}ា`;
            }
            else if (selectedType === "ឥ-ការន្ដ នបុំសកលិង្គ") {
                output = `                ឥ-ការន្ដ នបុំសកលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ិ | ${inputWord}ីនិ ${inputWord}ី
                ទុ. 	${inputWord}ឹ | ${inputWord}ីនិ ${inputWord}ី
                ត. 	${inputWord}ិនា | ${inputWord}ីហិ ${inputWord}នីភិ
                ច. 	${inputWord}ិស្ស ${inputWord}ិនោ | ${inputWord}ីនំ
                ប. 	${inputWord}ិស្មា ${inputWord}ិម្ហា ${inputWord}ិនា | ${inputWord}ីហិ ${inputWord}ីភិ
                ឆ. 	${inputWord}ិស្ស ${inputWord}ិនោ | ${inputWord}ីនំ
                ស. 	${inputWord}ិស្មឹ ${inputWord}ិម្ហិ | ${inputWord}ីសុ
                អា. ${inputWord}ិ | ${inputWord}ីនិ ${inputWord}ី`;
            }
            else if (selectedType === "ឧ-ការន្ដ នបុំសកលិង្គ") {
                output = `                ឧ-ការន្ដ នបុំសកលិង្គ + ពាក្យ
                --------------------
                ធ្វើដោយខ្ញុំព្រះករុណា អាត្មាភាព ខ្ញុំបាទ (គួនសុខគា)
                --------------------
                ប. 	${inputWord}ុ | ${inputWord}ូនិ ${inputWord}ូ
                ទុ. 	${inputWord}ុំ | ${inputWord}ូនិ ${inputWord}ូ
                ត. 	${inputWord}ុនា | ${inputWord}ូហិ ${inputWord}ូភិ
                ច. 	${inputWord}ុស្ស ${inputWord}ុនោ | ${inputWord}ូនំ
                ប. 	${inputWord}ុស្ស ${inputWord}ុម្ហា ${inputWord}ុនា | ${inputWord}ូហិ ${inputWord}ូភិ
                ឆ. 	${inputWord}ុស្ស ${inputWord}ុនោ | ${inputWord}ូនំ
                ស. ${inputWord}ុស្មឹ ${inputWord}ុម្ហិ | ${inputWord}ូសុ
                អា. ${inputWord}ុ | ${inputWord}ូនិ ${inputWord}ូ`;
            }
    // Add other conditions for different types...

    document.getElementById('outputArea').textContent = output;
});
