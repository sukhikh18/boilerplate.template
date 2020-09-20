/**
 * This file includes in all pages.
 */
import Cleave from 'cleave.js';
import "cleave.js/dist/addons/cleave-phone.ru";
import scrollTo from "./module/_scrollTo.js";
import preloader from "./module/_preloader.js";

jQuery(document).ready(function($) {
    /**
     * Phone formatter for RU phone numbers.
     */
    const $phones = $('[type="tel"]');
    if (typeof Cleave && $phones.length) {
        $phones.each(function(i, phoneInput) {
            new Cleave(phoneInput, {
                phone: true,
                phoneRegionCode: 'RU'
            });
        });
    }

    /**
     * Smooth scroll window to target when link href start from a hash.
     */
    $(document).on('click', '[href^="#"]', function(event) {
        event.preventDefault();
        scrollTo(this.getAttribute("href"));
    });

    /**
     * Example form submit event.
     */
    if (typeof $.fancybox) {
        $('.modal form').on('submit', function(event) {
            event.preventDefault();
            preloader.show('Загрузка..');

            // Disable retry by 120 seconds
            const $submit = $(this).find('[type="submit"]');
            $submit.attr('disabled', 'disabled');
            setTimeout(() => { $submit.removeAttr('disabled'); }, 120000);

            // Show success
            setTimeout(() => {
                preloader.hide();
                $.fancybox.open({
                    content: '<h1>Отлично!</h1><p>Ваша заявка принята, ожидайте звонка.</p>',
                    type: 'html',
                });
            }, 5000);
        });
    }
});