document.addEventListener('DOMContentLoaded', () => {
    const khmerInput = document.getElementById('khmerInput');
    const englishOutput = document.getElementById('englishOutput');
    const convertBtn = document.getElementById('convertBtn');

    const dictionary = {
        'ឆ្មា': 'Cat',
        'ឆ្កែ': 'Dog',
        'ផ្ទះ': 'House',
        'សាលា': 'School',
        'សៀវភៅ': 'Book',
        'មួយ': 'One',
        'ពីរ': 'Two',
        'បី': 'Three',
        'បួន': 'Four',
        'ប្រាំ': 'Five',
        'ប្រាំមួយ': 'Six',
        'ប្រាំពីរ': 'Seven',
        'ប្រាំបី': 'Eight',
        'ប្រាំបួន': 'Nine',
        'ដប់': 'Ten',
        'សូន្យ': 'Zero',
        'ឡាន': 'Car',
        'ដើមឈើ': 'Tree',
        'មេឃ': 'Sky',
        'ទឹក': 'Water',
        'មនុស្ស': 'Person',
        'កុំព្យូទ័រ': 'Computer',
        'ទូរស័ព្ទ': 'Phone',
        'កណ្ដុរ': 'Mouse',
        'កៅអី': 'Chair',
        'តុ': 'Table',
        'ផ្លែឈើ': 'Fruit',
        'បាយ': 'Rice',
        'ត្រី': 'Fish',
        'សាច់': 'Meat',
        'អក្សរ': 'Letter',
        'ពាក្យ': 'Word',
        'ប្រយោគ': 'Sentence',
        'កូនសោ': 'Key',
        'ទ្វារ': 'Door',
        'បង្អួច': 'Window',
        'កែវ': 'Glass',
        'ចាន': 'Plate',
        'ស្លាបព្រា': 'Spoon',
        'សម': 'Fork',
        'កាំបិត': 'Knife',
        'ប៊ិច': 'Pen',
        'ខ្មៅដៃ': 'Pencil',
        'ក្រដាស': 'Paper',
        'សិស្ស': 'Student',
        'គ្រូ': 'Teacher',
        'មន្ទីរពេទ្យ': 'Hospital',
        'ពេទ្យ': 'Doctor',
        'ថ្នាំ': 'Medicine',
        'ផ្សារ': 'Market',
        'ផ្លូវ': 'Road',
        'ស្ពាន': 'Bridge',
        'ទន្លេ': 'River',
        'ភ្នំ': 'Mountain',
        'សមុទ្រ': 'Sea',
        'ឆ្នេរ': 'Beach',
        'កោះ': 'Island',
        'ព្រៃឈើ': 'Forest',
        'ផ្កា': 'Flower',
        'បក្សី': 'Bird',
        'សត្វ': 'Animal',
        'ថ្ងៃ': 'Day',
        'យប់': 'Night',
        'ព្រឹក': 'Morning',
        'ល្ងាច': 'Evening',
        'ឆ្នាំ': 'Year',
        'ខែ': 'Month',
        'សប្តាហ៍': 'Week',
        'ថ្ងៃនេះ': 'Today',
        'ម្សិលមិញ': 'Yesterday',
        'ថ្ងៃស្អែក': 'Tomorrow',
        'បាទ/ចាស': 'Yes',
        'ទេ': 'No',
        'អរគុណ': 'Thank you',
        'សូមទោស': 'Sorry',
        'សួស្តី': 'Hello',
        'លាហើយ': 'Goodbye',
        'ស្រលាញ់': 'Love',
        'ស្អប់': 'Hate',
        'សប្បាយរីករាយ': 'Happy',
        'ក្រៀមក្រំ': 'Sad',
        'ខឹង': 'Angry',
        'ខ្លាច': 'Scared',
        'ធំ': 'Big',
        'តូច': 'Small',
        'ខ្ពស់': 'Tall',
        'ទាប': 'Short',
        'វែង': 'Long',
        'ខ្លី': 'Short',
        'ធ្ងន់': 'Heavy',
        'ស្រាល': 'Light',
        'ក្តៅ': 'Hot',
        'ត្រជាក់': 'Cold',
        'ថ្មី': 'New',
        'ចាស់': 'Old',
        'ល្អ': 'Good',
        'អាក្រក់': 'Bad',
        'ស្អាត': 'Beautiful',
        'លឿន': 'Fast',
        'យឺត': 'Slow',
        'ច្រើន': 'Many/Much',
        'តិច': 'Few/Little',
        'ងាយស្រួល': 'Easy',
        'ពិបាក': 'Difficult'
    };

    // បញ្ជីពណ៌ដែលនឹងត្រូវប្រើ
    // ខ្ញុំបានជ្រើសរើសពណ៌ដែលភ្លឺ និងងាយស្រួលមើល
    const colors = [
        '#FF5733', // ក្រហមទឹកក្រូច
        '#33FF57', // បៃតងខ្ចី
        '#3357FF', // ខៀវ
        '#FF33CC', // ផ្កាឈូក
        '#FFCC33', // លឿងទឹកក្រូច
        '#33CCFF', // ខៀវខ្ចី
        '#8A33FF', // ស្វាយ
        '#FF8A33', // ទឹកក្រូច
        '#33FFCC', // ទឹកប៊ិច
        '#CC33FF', // ស្វាយខៀវ
        '#A52A2A', // ត្នោត
        '#008000', // បៃតងចាស់
        '#4682B4', // ខៀវស្រាល
        '#DA70D6', // ស្វាយស្រាល
        '#FFD700'  // មាស
    ];
    let colorIndex = 0; // index សម្រាប់តាមដានពណ៌ដែលបានប្រើ

    // មុខងារសម្រាប់យកពណ៌បន្ទាប់
    function getNextColor() {
        const color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; // រង្វិលជុំទៅដើមវិញពេលអស់ពណ៌
        return color;
    }

    convertBtn.addEventListener('click', () => {
        let khmerText = khmerInput.value;
        let translatedHtml = ''; // សម្រាប់ផ្ទុកលទ្ធផលជា HTML

        // យក key ទាំងអស់ពី dictionary ហើយតម្រៀបតាមប្រវែងពីធំទៅតូច
        const sortedKhmerWords = Object.keys(dictionary).sort((a, b) => b.length - a.length);

        // ដើម្បីបកប្រែពាក្យដែលជាប់គ្នា យើងត្រូវបំបែកអត្ថបទជាផ្នែកៗ
        // ផ្នែកនីមួយៗអាចជាពាក្យដែលត្រូវបក ឬជាផ្នែកដែលមិនមែនជាពាក្យត្រូវបក
        let tempText = khmerText; // ប្រើអត្ថបទបណ្ដោះអាសន្នដើម្បីធ្វើការ
        const parts = []; // សម្រាប់ផ្ទុកផ្នែកនីមួយៗនៃអត្ថបទ

        // រកពាក្យដែលត្រូវបក និងផ្នែកដែលមិនត្រូវបក
        while (tempText.length > 0) {
            let foundMatch = false;
            for (const khmerWord of sortedKhmerWords) {
                const regex = new RegExp(khmerWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
                const match = regex.exec(tempText); // ស្វែងរកការផ្គូផ្គងដំបូង

                if (match && match.index === 0) { // បើរកឃើញពាក្យនៅដើម string
                    // បន្ថែមផ្នែកដែលមិនបានបកមុនពាក្យដែលត្រូវបក (បើមាន)
                    if (match.index > 0) {
                        parts.push({ type: 'text', content: tempText.substring(0, match.index) });
                    }
                    // បន្ថែមពាក្យដែលត្រូវបក
                    parts.push({ type: 'translated', khmer: khmerWord, english: dictionary[khmerWord], original: match[0] });
                    tempText = tempText.substring(match[0].length); // កាត់ផ្នែកដែលបានបកចេញ
                    foundMatch = true;
                    break; // ចេញពី loop ពាក្យ
                }
                regex.lastIndex = 0; // កំណត់ lastIndex ទៅ 0 វិញសម្រាប់ exec
            }
            if (!foundMatch) {
                // បើរកមិនឃើញពាក្យណាដែលត្រូវបកនៅដើម string ទេ
                // យកតួអក្សរទីមួយដែលមិនស្គាល់ ហើយបន្ថែមវាទៅផ្នែក "text"
                parts.push({ type: 'text', content: tempText.charAt(0) });
                tempText = tempText.substring(1);
            }
        }

        // រួមបញ្ចូលផ្នែកទាំងអស់ទៅជា HTML string
        for (const part of parts) {
            if (part.type === 'translated') {
                const color = getNextColor();
                translatedHtml += `<span style="color: ${color};">${part.english}</span>`;
            } else {
                translatedHtml += part.content;
            }
        }
        
        // យើងត្រូវបង្ហាញលទ្ធផលនៅក្នុង div មួយ មិនមែន textarea ទេ ព្រោះ textarea មិនគាំទ្រ HTML
        // ដូច្នេះ យើងត្រូវផ្លាស់ប្តូរ #englishOutput ទៅជា div នៅក្នុង HTML
        englishOutput.innerHTML = translatedHtml;
    });
});