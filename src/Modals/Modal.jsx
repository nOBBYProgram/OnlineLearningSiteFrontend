import React from 'react';
import { FaBook, FaQuestion, FaCode, FaFileAlt } from 'react-icons/fa';

const Modal = ({
  isOpen,
  closeModal,
  onSave,
  onAddCurriculumItem,
  onEditCurriculumItem,
  editingCurriculumItem,
}) => {
  const [sections, setSections] = React.useState([]);
  const [sectionTitle, setSectionTitle] = React.useState('');
  const [sectionContent, setSectionContent] = React.useState('');
  const [curriculumItemType, setCurriculumItemType] = React.useState('');

  const handleSave = () => {
    const newSection = {
      title: sectionTitle,
      content: sectionContent,
      curriculumItems: [],
    };
    setSections([...sections, newSection]);
    setSectionTitle('');
    setSectionContent('');
    closeModal();
  };

  const handleAddCurriculumItem = () => {
    const newCurriculumItem = {
      type: curriculumItemType,
    };
    const updatedSections = sections.map((section) => {
      if (section === editingCurriculumItem) {
        return {
          ...section,
          curriculumItems: [...section.curriculumItems, newCurriculumItem],
        };
      }
      return section;
    });
    setSections(updatedSections);
    setCurriculumItemType('');
    closeModal();
  };

  const handleEditCurriculumItem = () => {
    // Handle editing curriculum item (if needed)
    closeModal();
  };

  const getCurriculumItemIcon = (type) => {
    switch (type) {
      case 'lecture':
        return <FaBook />;
      case 'quiz':
        return <FaQuestion />;
      case 'assignment':
        return <FaFileAlt />;
      case 'problems':
        return <FaCode />;
      default:
        return null;
    }
  };

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-50 overflow-y-auto`}>
      <div className="modal-content bg-white p-8 mx-auto my-4 rounded-md max-w-md">
        {editingCurriculumItem ? (
          // Editing curriculum item logic (if needed)
          <></>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Add Section</h2>
            <label className="block mb-2">Title:</label>
            <input
              type="text"
              value={sectionTitle}
              onChange={(e) => setSectionTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <label className="block mb-2">What will students learn:</label>
            <input
              type="text"
              value={sectionContent}
              onChange={(e) => setSectionContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Save
            </button>

            <hr className="my-6 border-gray-300" />

            <h2 className="text-2xl font-bold mb-4">Add Curriculum Item</h2>
            <div className="flex items-center mb-4">
              <select
                value={curriculumItemType}
                onChange={(e) => setCurriculumItemType(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mr-2"
              >
                <option value="lecture">Lecture</option>
                <option value="quiz">Quiz</option>
                <option value="assignment">Assignment</option>
                <option value="problems">Problems</option>
              </select>
              {getCurriculumItemIcon(curriculumItemType)}
            </div>

            <button
              onClick={handleAddCurriculumItem}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Add Curriculum Item
            </button>
          </>
        )}

        <button
          onClick={closeModal}
          className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 mt-4"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
