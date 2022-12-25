<template>
    <div class="ps-countdown">
        <div class="ps-countdown__content">
            <div class="ps-countdown__block ps-countdown__days">
                <div class="ps-countdown__number">
                    <span v-for="(item, index) in days" :key="index">{{ item }}</span>
                </div>
                <div class="ps-countdown__ref">Days</div>
            </div>
            <div class="ps-countdown__block ps-countdown__hours">
                <div class="ps-countdown__number">
                    <span v-for="(item, index) in hours" :key="index">{{ item }}</span>
                </div>
                <div class="ps-countdown__ref">Hours</div>
            </div>
            <div class="ps-countdown__block ps-countdown__minutes">
                <div class="ps-countdown__number">
                   <span v-for="(item, index) in minutes" :key="index">{{ item }}</span>
                </div>
                <div class="ps-countdown__ref">Mins</div>
            </div>
            <div class="ps-countdown__block ps-countdown__seconds">
                <div class="ps-countdown__number">
                    <span v-for="(item, index) in seconds" :key="index">{{ item }}</span>
                </div>
                <div class="ps-countdown__ref">Secs</div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'CountDown',
    data() {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        };
    },
    mounted() {
        let deadline = new Date(Date.parse(new Date()) + 26 * 60 * 60 * 1000);
        setInterval(() => {
            let t = Date.parse(deadline) - Date.parse(new Date());
            let seconds = Math.floor((t / 1000) % 60);
            let minutes = Math.floor((t / 1000 / 60) % 60);
            let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            
            this.seconds = seconds.toString();
            this.minutes = minutes.toString();
            this.hours = hours.toString();
            this.days = days.toString();

            if (days < 10) {
                this.days = '0' + this.days;
            }
            if (hours < 10) {
                this.hours = '0' + this.hours;
            }
            if (minutes < 10) {
                this.minutes = '0' + this.minutes;
            }
            if (seconds < 10) {
                this.seconds = '0' + this.seconds;
            }
        }, 1000);
    }
};
</script>

<style lang="scss" scoped></style>
