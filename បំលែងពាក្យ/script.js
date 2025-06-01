document.addEventListener('DOMContentLoaded', () => {
    const khmerInput = document.getElementById('khmerInput');
    const englishOutput = document.getElementById('englishOutput');
    const convertBtn = document.getElementById('convertBtn');
    const viewSizeButtons = document.querySelectorAll('.view-btn');
    const layoutButtons = document.querySelectorAll('.layout-btn');

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

    const colors = [
        '#FF5733', '#33FF57', '#3357FF', '#FF33CC', '#FFCC33',
        '#33CCFF', '#8A33FF', '#FF8A33', '#33FFCC', '#CC33FF',
        '#A52A2A', '#008000', '#4682B4', '#DA70D6', '#FFD700',
        '#00BFFF', '#ADFF2F', '#FF6347', '#40E0D0', '#EE82EE'
    ];
    let colorIndex = 0;

    function getNextColor() {
        const color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
        return color;
    }

    // --- មុខងារសម្រាប់ View Options ---
    viewSizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            viewSizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            englishOutput.classList.remove('xlarge-font', 'large-font', 'medium-font', 'small-font');
            englishOutput.classList.add(button.dataset.size + '-font');
        });
    });

    layoutButtons.forEach(button => {
        button.addEventListener('click', () => {
            layoutButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            englishOutput.classList.remove('inline-layout', 'list-layout', 'block-layout');
            englishOutput.classList.add(button.dataset.layout + '-layout');
        });
    });

    // --- មុខងារបំប្លែងពាក្យ ---
    convertBtn.addEventListener('click', () => {
        let khmerText = khmerInput.value;
        let translatedHtml = '';

        const sortedKhmerWords = Object.keys(dictionary).sort((a, b) => b.length - a.length);

        let tempText = khmerText;
        const parts = [];

        while (tempText.length > 0) {
            let foundMatch = false;
            for (const khmerWord of sortedKhmerWords) {
                const regex = new RegExp(khmerWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
                const match = regex.exec(tempText);

                if (match && match.index === 0) {
                    if (match.index > 0) {
                        parts.push({ type: 'text', content: tempText.substring(0, match.index) });
                    }
                    parts.push({ type: 'translated', khmer: khmerWord, english: dictionary[khmerWord], original: match[0] });
                    tempText = tempText.substring(match[0].length);
                    foundMatch = true;
                    break;
                }
                regex.lastIndex = 0;
            }
            if (!foundMatch) {
                parts.push({ type: 'text', content: tempText.charAt(0) });
                tempText = tempText.substring(1);
            }
        }

        colorIndex = 0;
        for (const part of parts) {
            if (part.type === 'translated') {
                const color = getNextColor();
                // បន្ថែម title attribute នៅទីនេះ!
                translatedHtml += `<span style="color: ${color};" title="បកប្រែពី: ${part.original}">` +
                                  `${part.english}` +
                                  `</span>`;
            } else {
                translatedHtml += part.content;
            }
        }

        englishOutput.innerHTML = translatedHtml;
    });
});