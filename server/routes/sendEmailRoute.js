import express from 'express'
import { sendEmailMessage } from './brevo/brevo.js'

const router = express.Router()

router.post('/send-email', async (req, res) => {
    try {
        const { name, email, message } = req.body
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' })
        }
        await sendEmailMessage(name, email, message)
        res.status(200).json({
            success: true,
            message: 'Email sent successfully.'
        })
    } catch (err) {
        console.error('Error in /send-email route:', err)
        res.status(500).json({
            error: err.message,
            details: err.message
        })
    }
})

export default router