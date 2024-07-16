import express from 'express';
import path from 'path';
import { Notes } from '../Models/notes.js';

const router = express.Router();

// Serve static files from the React build folder
router.use(express.static(path.join(__dirname, '../../client/build')));

// API routes
router.get('/api/allnotes', async (req, res) => {
  try {
    const notes = await Notes.find();
    return res.status(200).json({ result: notes });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.post('/api/newnote', async (req, res) => {
  try {
    const data = req.body;
    const newNote = new Notes(data);
    await newNote.save();
    return res.status(200).json({ message: 'Note saved successfully' });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.put('/api/newnote/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const data = req.body;
    const updatedNote = await Notes.findByIdAndUpdate(id, data, { new: true });
    return res.status(200).json({ message: 'Note updated successfully' });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.get('/api/viewnote/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Notes.findById(id);
    if (!note) throw new Error('Note not found');
    return res.status(200).json({ note });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

router.delete('/api/deletenote/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNote = await Notes.findByIdAndDelete(id);
    if (!deletedNote) throw new Error('Note not found');
    return res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

// Serve React app for all other routes (must be the last route)
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

export default router;
