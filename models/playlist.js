import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema(
  {
    themeTitle: { type: String, required: true },
    playlist: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'Url', required: true },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Playlist ||
  mongoose.model('Playlist', playlistSchema);
