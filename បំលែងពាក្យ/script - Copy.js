document.addEventListener('DOMContentLoaded', () => {
    const khmerInput = document.getElementById('khmerInput');
    const englishOutput = document.getElementById('englishOutput');
    const convertBtn = document.getElementById('convertBtn');

    // Object សម្រាប់ផ្ទុកពាក្យខ្មែរ និងអង់គ្លេសផ្គូផ្គងគ្នា
    // Key ជាពាក្យខ្មែរ (តួអក្សរតូច) Value ជាពាក្យអង់គ្លេស
    const dictionary = {
        // ពាក្យខ្មែរ - អង់គ្លេស (ឧទាហរណ៍)
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

    convertBtn.addEventListener('click', () => {
        let khmerText = khmerInput.value; // យកអត្ថបទពី input

        // យក key ទាំងអស់ពី dictionary ហើយតម្រៀបតាមប្រវែងពីធំទៅតូច
        // នេះជួយធានាថាពាក្យវែង (ឧទាហរណ៍ 'ប្រាំបួន') ត្រូវបានរកឃើញមុនពាក្យខ្លីដែលជាផ្នែករបស់វា (ឧទាហរណ៍ 'ប្រាំ')
        const sortedKhmerWords = Object.keys(dictionary).sort((a, b) => b.length - a.length);

        // ប្រើ loop ដើម្បីជំនួសពាក្យម្តងមួយៗ
        for (const khmerWord of sortedKhmerWords) {
            const englishEquivalent = dictionary[khmerWord];

            // បង្កើត regular expression ដើម្បីស្វែងរកពាក្យខ្មែរ
            // 'g' សម្រាប់ស្វែងរកទាំងអស់ (global)
            // 'i' សម្រាប់ case-insensitive (មិនខ្វល់អក្សរធំតូច) - ទោះបីជាពាក្យខ្មែរមិនមានក៏ដោយ
            // ប្រើ `khmerWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')` ដើម្បី escape special characters 
            // ក្នុងករណីពាក្យខ្មែរមានតួអក្សរពិសេសដែលអាចប៉ះពាល់ដល់ regex
            const regex = new RegExp(khmerWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
            
            // ជំនួសពាក្យខ្មែរដោយពាក្យអង់គ្លេសដែលត្រូវគ្នា
            khmerText = khmerText.replace(regex, englishEquivalent);
        }

        englishOutput.value = khmerText; // បង្ហាញលទ្ធផល
    });
});